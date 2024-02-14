import { Injectable } from '@nestjs/common';
import { ProductRequestDTO } from './productRequestDTO';
import { ProductResponseDTO } from './productResponseDTO';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProductsService {
  private products: ProductResponseDTO[] = [];

  constructor(private readonly prismaService: PrismaService) {}
  getProducts(): ProductResponseDTO[] {
    return this.products;
  }
  async addProduct(
    newProductRequest: ProductRequestDTO,
  ): Promise<ProductResponseDTO> {
    const productResponse: ProductResponseDTO = { id: 1, ...newProductRequest };
    this.products.push(productResponse);
    return this.prismaService.product.create({ data: newProductRequest });
  }
}
