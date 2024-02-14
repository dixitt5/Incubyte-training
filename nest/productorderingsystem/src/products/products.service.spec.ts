import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';
import { ProductRequestDTO } from './productRequestDTO';
import { ProductResponseDTO } from './productResponseDTO';
import { PrismaService } from '../prisma/prisma.service';
import { mockDeep } from 'jest-mock-extended';
import { Product } from '@prisma/client';

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

  it('should return empty product list', () => {
    const response: ProductResponseDTO[] = service.getProducts();
    expect(response).toMatchObject([]);
  });

  it('should return all product list', async () => {
    // arrange
    const productRequest: ProductRequestDTO = { name: 'test', price: 100 };
    const expectedProductResponse: ProductResponseDTO = {
      id: 1,
      ...productRequest,
    };

    await service.addProduct(productRequest);

    // action
    const response: ProductResponseDTO[] = service.getProducts();

    // assert
    // updated: "strictNullChecks": true; in tsconfig.json
    expect(response).toMatchObject([expectedProductResponse]);
  });

  it('should add a new product', async () => {
    // arrange
    const productRequest: ProductRequestDTO = { name: 'test', price: 100 };
    const productResponse: ProductResponseDTO = { id: 1, ...productRequest };
    prismaService.product.create.mockResolvedValue(productResponse);

    // action
    const response: ProductResponseDTO =
      await service.addProduct(productRequest);

    // assert
    expect(response).toMatchObject(productResponse);
    expect(prismaService.product.create).toHaveBeenCalledWith({
      data: productRequest,
    });
  });
});
