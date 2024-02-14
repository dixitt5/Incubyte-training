import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductRequestDTO } from './productRequestDTO';
import { ProductResponseDTO } from './productResponseDTO';

@Controller('products')
export class ProductsController {
  private products = [];
  @Get()
  getProducts() {
    return this.products;
  }

  @Post()
  addProduct(@Body() productRequest: ProductRequestDTO): ProductResponseDTO {
    const productResponse: ProductResponseDTO = { id: 1, ...productRequest };
    this.products.push(productResponse);
    return productResponse;
  }
}
