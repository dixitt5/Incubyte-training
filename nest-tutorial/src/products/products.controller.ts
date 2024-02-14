import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductRequestDTO } from './productRequestDTO';
import { ProductResponseDTO } from './productResponseDTO';

@Controller('products')
export class ProductsController {
  private products: ProductResponseDTO[] = [];
  @Get()
  getProducts() {
    return this.products;
  }

  @Post()
  addProduct(@Body() newProduct: ProductRequestDTO) {
    const addedProduct: ProductResponseDTO = { id: 1, ...newProduct };
    this.products.push(addedProduct);
    return addedProduct;
  }
}
