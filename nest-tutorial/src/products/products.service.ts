import { Injectable } from '@nestjs/common';
import { ProductRequestDTO } from './productRequestDTO';
import { ProductResponseDTO } from './productResponseDTO';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProductsService {
  private products: ProductResponseDTO[] = [];
  constructor(private readonly prismaService: PrismaService) {}
  async getProducts() {
    return await this.prismaService.product.findMany();
  }
  async addProduct(product: ProductRequestDTO) {
    return await this.prismaService.product.create({ data: product });
  }
}
