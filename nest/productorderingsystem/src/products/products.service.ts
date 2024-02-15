import { Injectable } from '@nestjs/common';
import { ProductRequestDTO } from './productRequestDTO';
import { ProductResponseDTO } from './productResponseDTO';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private readonly prismaService: PrismaService) {}

  async getProducts(): Promise<ProductResponseDTO[]> {
    return this.prismaService.product.findMany();
  }

  async addProduct(
    newProductRequest: ProductRequestDTO,
  ): Promise<ProductResponseDTO> {
    return this.prismaService.product.create({ data: newProductRequest });
  }
}
