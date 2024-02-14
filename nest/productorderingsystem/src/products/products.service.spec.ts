import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';
import { ProductRequestDTO } from './productRequestDTO';
import { ProductResponseDTO } from './productResponseDTO';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsService],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return empty product list', () => {
    const response: ProductResponseDTO[] = service.getProducts();
    expect(response).toMatchObject([]);
  });

  it('should return all product list', () => {
    // arrange
    const productRequest: ProductRequestDTO = { name: 'test', price: 100 };
    const expectedProductResponse: ProductResponseDTO =
      service.addProduct(productRequest);

    // action
    const response: ProductResponseDTO[] = service.getProducts();

    // assert
    expect(response).toMatchObject([expectedProductResponse]);
  });

  it('should add a new product', () => {
    // arrange
    const productRequest: ProductRequestDTO = { name: 'test', price: 100 };
    const productResponse: ProductResponseDTO = { id: 1, ...productRequest };

    // action
    const response: ProductResponseDTO = service.addProduct(productRequest);

    // assert
    expect(response).toMatchObject(productResponse);
  });
});
