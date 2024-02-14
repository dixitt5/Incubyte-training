import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller';
import { ProductRequestDTO } from './productRequestDTO';
import { ProductResponseDTO } from './productResponseDTO';
import { mockDeep } from 'jest-mock-extended';
import { ProductsService } from './products.service';

describe('ProductsController', () => {
  let controller: ProductsController;
  const service = mockDeep<ProductsService>();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [{ provide: ProductsService, useValue: service }],
    }).compile();

    controller = module.get<ProductsController>(ProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return empty array', async () => {
    service.getProducts.mockResolvedValue([]);
    expect(await controller.getProducts()).toMatchObject([]);
  });

  it('should add a new product', async () => {
    service.addProduct.mockResolvedValue({ id: 1, name: 'test', price: 10 });
    //complete this
    const expectedProduct: ProductResponseDTO = {
      id: expect.any(Number),
      name: 'test',
      price: 10,
    };
    expect(
      await controller.addProduct({
        name: 'test',
        price: 10,
      } as ProductRequestDTO),
    ).toMatchObject(expectedProduct);

    expect(service.addProduct).toHaveBeenCalledWith({
      name: 'test',
      price: 10,
    });
  });

  it('should return list of products', async () => {
    // arrange
    service.getProducts.mockResolvedValue([{ id: 1, name: 'test', price: 10 }]);
    const expectedProduct: ProductResponseDTO = {
      id: 1,
      name: 'test',
      price: 10,
    };
    await controller.addProduct({
      name: 'test',
      price: 10,
    } as ProductRequestDTO);

    // act
    const products = await controller.getProducts();

    // assert
    expect(service.getProducts).toHaveBeenCalled();
    expect(products).toMatchObject([expectedProduct]);
  });
});
