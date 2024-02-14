import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';
import { ProductRequestDTO } from './productRequestDTO';
import { PrismaService } from '../prisma/prisma.service';
import { anyNumber, mockDeep } from 'jest-mock-extended';

describe('ProductsService', () => {
  let service: ProductsService;
  const prismaService = mockDeep<PrismaService>();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductsService,
        { provide: PrismaService, useValue: prismaService },
      ],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should add a product', async () => {
    const productToBeAdded: ProductRequestDTO = { name: 'test', price: 10 };
    await service.addProduct(productToBeAdded);
    expect(prismaService.product.create).toHaveBeenCalledWith({
      data: productToBeAdded,
    });
  });

  it('should return empty array when no product exist', async () => {
    prismaService.product.findMany.mockResolvedValue([]);
    expect(await service.getProducts()).toMatchObject([]);
  });

  it('should return list of products', async () => {
    // arrange
    prismaService.product.findMany.mockResolvedValue([
      { id: expect.any(Number), name: 'test', price: 10 },
    ]);
    const productToBeAdded: ProductRequestDTO = { name: 'test', price: 10 };

    // act
    await service.addProduct(productToBeAdded);

    // assert
    expect(await service.getProducts()).toMatchObject([
      { id: 1, ...productToBeAdded },
    ]);
  });
});
