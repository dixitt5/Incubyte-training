import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductRequestDTO } from './productRequestDTO';
import { ProductResponseDTO } from './productResponseDTO';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Get()
  async getProducts(): Promise<ProductResponseDTO[]> {
    return this.productsService.getProducts();
  }

  @Post()
  async addProduct(
    @Body() productRequest: ProductRequestDTO,
  ): Promise<ProductResponseDTO> {
    return this.productsService.addProduct(productRequest);
  }
}
