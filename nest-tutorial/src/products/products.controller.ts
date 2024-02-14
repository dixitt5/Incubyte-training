import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts() {
    return [];
  }

  @Post()
  addProduct(@Body() newProduct: { price: number; name: string }) {
    return { id: 1, ...newProduct };
  }
}
