import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Product } from '@prisma/client';

@Injectable()
export class OrderService {
  constructor(private readonly prismaService: PrismaService) {}
  async createOrder(orderToBeAdded: { quantity: number; productId: number }) {
    await this.productExists(orderToBeAdded.productId);
    return this.prismaService.order
      .create({ data: orderToBeAdded, include: { product: true } })
      .then((orders) => {
        return this.transformOrderDTO(orders);
      });
  }

  private async productExists(productId: number) {
    const product = await this.prismaService.product.findUnique({
      where: { id: productId },
    });
    if (!product) {
      throw new BadRequestException('Product does not exist');
    }
  }

  async getOrder(): Promise<
    { id: number; quantity: number; product: Product }[]
  > {
    const orders = await this.prismaService.order.findMany({
      include: { product: true },
    });
    return orders.map((order) => {
      return this.transformOrderDTO(order);
    });
  }

  private transformOrderDTO(order) {
    return {
      id: order.id,
      quantity: order.quantity,
      product: order.product,
    };
  }
}
