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

  it('should return empty array', () => {
    expect(controller.getProducts()).toMatchObject([]);
  });

  it('should add a new product', () => {
    //complete this
    const expectedProduct: ProductResponseDTO = {
      id: 1,
      name: 'test',
      price: 10,
    };
    expect(
      controller.addProduct({ name: 'test', price: 10 } as ProductRequestDTO),
    ).toMatchObject(expectedProduct);
  });

  it('should return list of products', () => {
    const expectedProduct: ProductResponseDTO = {
      id: 1,
      name: 'test',
      price: 10,
    };
    controller.addProduct({ name: 'test', price: 10 } as ProductRequestDTO);
    expect(controller.getProducts()).toMatchObject([expectedProduct]);
  });
});
