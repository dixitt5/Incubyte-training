import { Body, Controller, Get, Post } from '@nestjs/common';
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
  getProducts() {
    return this.service.getProducts();
  }

  @Post()
  addProduct(@Body() newProduct: ProductRequestDTO) {
    const addedProduct: ProductResponseDTO =
      this.service.addProduct(newProduct);
    return addedProduct;
  }
}
