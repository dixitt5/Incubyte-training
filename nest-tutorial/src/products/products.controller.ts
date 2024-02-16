import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { ProductRequestDTO } from './productRequestDTO';
import { ProductResponseDTO } from './productResponseDTO';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  private products: ProductResponseDTO[] = [];
  private service: ProductsService;

  constructor(service: ProductsService) {
    this.service = service;
  }
  @Get()
  async getProducts() {
    return await this.service.getProducts();
  }

  @Post()
  async addProduct(@Body() newProduct: ProductRequestDTO) {
    const addedProduct = await this.service.addProduct(newProduct);
    return addedProduct;
  }
}
