import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller';
import { ProductRequestDTO } from './productRequestDTO';
import { ProductResponseDTO } from './productResponseDTO';
import { ProductsService } from './products.service';
import { mockDeep } from 'jest-mock-extended';

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

  it('should return empty product list', async () => {
    service.getProducts.mockResolvedValueOnce([]);
    expect(await controller.getProducts()).toMatchObject([]);
  });

  it('should return all product list', async () => {
    // arrange
    const productRequest: ProductRequestDTO = { name: 'test', price: 100 };
    const productResponse: ProductResponseDTO = { id: 1, ...productRequest };
    service.getProducts.mockResolvedValueOnce([productResponse]);

    // act
    const response = await controller.getProducts();

    // assert
    expect(service.getProducts).toHaveBeenCalled();
    expect(response).toMatchObject([productResponse]);
  });

  it('should add a new product', async () => {
    const productRequest: ProductRequestDTO = { name: 'test', price: 100 };
    const productResponse: ProductResponseDTO = { id: 1, ...productRequest };
    service.addProduct.mockResolvedValueOnce(productResponse);

    // act
    const response = await controller.addProduct(productRequest);

    expect(response).toMatchObject(productResponse);
    expect(service.addProduct).toHaveBeenCalledWith(productRequest);
  });
});
