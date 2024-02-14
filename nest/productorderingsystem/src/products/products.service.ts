import { Injectable } from '@nestjs/common';
import { ProductRequestDTO } from './productRequestDTO';
import { ProductResponseDTO } from './productResponseDTO';

@Injectable()
export class ProductsService {
  private products: ProductResponseDTO[] = [];
  getProducts(): ProductResponseDTO[] {
    return this.products;
  }
  addProduct(newProductRequest: ProductRequestDTO): ProductResponseDTO {
    const productResponse: ProductResponseDTO = { id: 1, ...newProductRequest };
    this.products.push(productResponse);
    return productResponse;
  }
}
