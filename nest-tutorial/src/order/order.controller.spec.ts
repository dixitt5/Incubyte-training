import { Test, TestingModule } from '@nestjs/testing';
import { OrderController } from './order.controller';
import { mockDeep } from 'jest-mock-extended';
import { OrderService } from './order.service';

describe('OrderController', () => {
  let controller: OrderController;
  const service = mockDeep<OrderService>();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderController],
      providers: [
        {
          provide: OrderService,
          useValue: service,
        },
      ],
    }).compile();

    controller = module.get<OrderController>(OrderController);
  });

  it('should call create order', async () => {
    service.createOrder.mockResolvedValue({
      id: 1,
      product: { id: 1, name: 'test', price: 10 },
      quantity: 1,
    });
    const orderToBeAdded = {
      productId: 1,
      quantity: 1,
    };

    const response = await controller.createOrder(orderToBeAdded);
    expect(await service.createOrder).toHaveBeenCalledWith(orderToBeAdded);
    expect(response).toMatchObject({ id: 1, quantity: 1 });
  });

  it('should get orders', async () => {
    const expectedOrder = {
      id: expect.any(Number),
      product: {
        id: 1,
        name: 'test',
        price: 10,
      },
      quantity: 1,
    };
    service.getOrder.mockResolvedValueOnce([expectedOrder]);
    const response = await controller.getOrder();
    expect(service.getOrder).toHaveBeenCalledWith();
    expect(response).toStrictEqual([expectedOrder]);
  });
});
