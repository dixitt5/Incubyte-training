import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductRequestDTO } from './productRequestDTO';
import { ProductResponseDTO } from './productResponseDTO';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts() {
    return [];
  }

  @Post()
  addProduct(@Body() newProduct: ProductRequestDTO) {
    const addedProduct: ProductResponseDTO = { id: 1, ...newProduct };
    return addedProduct;
  }
}
