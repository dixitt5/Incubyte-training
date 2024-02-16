import { Test, TestingModule } from '@nestjs/testing';
import { OrderService } from './order.service';
import { mockDeep } from 'jest-mock-extended';
import { PrismaService } from '../prisma/prisma.service';
import { isReadableStreamLike } from 'rxjs/internal/util/isReadableStreamLike';
import { BadRequestException } from '@nestjs/common';

describe('OrderService', () => {
  let service: OrderService;
  const prismaService = mockDeep<PrismaService>();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OrderService,
        { provide: PrismaService, useValue: prismaService },
      ],
    }).compile();

    service = module.get<OrderService>(OrderService);
  });

  it('should create an order', async () => {
    //arrange
    const existingProduct = {
      id: 1,
      name: 'test',
      price: 10,
    };
    const expectedOrder = {
      id: 1,
      product: existingProduct,
      quantity: 1,
    };
    prismaService.order.create.mockResolvedValue({
      productId: existingProduct.id,
      ...expectedOrder,
    });
    prismaService.product.findUnique.mockResolvedValueOnce(existingProduct);

    //act

    expect(
      await service.createOrder({ productId: existingProduct.id, quantity: 1 }),
    ).toMatchObject({
      id: expectedOrder.id,
      product: existingProduct,
      quantity: expectedOrder.quantity,
    });
    expect(prismaService.order.create).toHaveBeenCalledWith({
      data: { productId: existingProduct.id, quantity: 1 },
      include: { product: true },
    });
  });

  it('should get orders', async () => {
    const existingProduct = {
      id: 1,
      name: 'test',
      price: 10,
    };
    const expectedOrder = {
      id: 1,
      productId: existingProduct.id,
      product: existingProduct,
      quantity: 1,
    };
    prismaService.product.create.mockResolvedValueOnce(existingProduct);
    prismaService.order.findMany.mockResolvedValue([expectedOrder]);
    prismaService.product.create({ data: existingProduct }).then((product) => {
      expect(product).toEqual(existingProduct);
    });
    expect(await service.getOrder()).toMatchObject([
      {
        id: expectedOrder.id,
        product: existingProduct,
        quantity: expectedOrder.quantity,
      },
    ]);
    expect(prismaService.order.findMany).toHaveBeenCalledWith({
      include: { product: true },
    });
  });

  it('should throw error when product does not exist', async () => {
    const orderToCreate = {
      productId: 1,
      quantity: 1,
    };
    const orderPromise = service.createOrder(orderToCreate);
    await expect(orderPromise).rejects.toThrow(BadRequestException);
    await expect(orderPromise).rejects.toThrow('Product does not exist');
    expect(prismaService.product.findUnique).toHaveBeenCalledWith({
      where: { id: 1 },
    });
  });
});
