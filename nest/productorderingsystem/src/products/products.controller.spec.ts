import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller';
import { ProductRequestDTO } from './productRequestDTO';
import { ProductResponseDTO } from './productResponseDTO';

describe('ProductsController', () => {
  let controller: ProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
    }).compile();

    controller = module.get<ProductsController>(ProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return empty product list', () => {
    expect(controller.getProducts()).toMatchObject([]);
  });

  it('should return all product list', () => {
    const productRequest: ProductRequestDTO = { name: 'test', price: 100 };
    controller.addProduct(productRequest);

    const expectedProductResponse: ProductResponseDTO = {
      id: 1,
      name: 'test',
      price: 100,
    };
    expect(controller.getProducts()).toMatchObject([expectedProductResponse]);
  });

  it('should add a new product', () => {
    const productRequest: ProductRequestDTO = { name: 'test', price: 100 };
    const productResponse: ProductResponseDTO = { id: 1, ...productRequest };
    expect(controller.addProduct(productRequest)).toMatchObject(
      productResponse,
    );
  });
});
