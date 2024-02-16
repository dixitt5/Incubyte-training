import {
  Body,
  Controller,
  Get,
  Post,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { InternalServerExceptionFilter } from './internal-server-exception.filiter';
import { LogOrderInterceptor } from './order-interceptor';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @UseInterceptors(LogOrderInterceptor)
  @Post()
  async createOrder(
    @Body() orderToBeAdded: { quantity: number; productId: number },
  ) {
    return this.orderService.createOrder(orderToBeAdded);
  }

  @Get()
  async getOrder() {
    return this.orderService.getOrder();
  }
}
