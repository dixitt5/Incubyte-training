import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { PrismaService } from './prisma/prisma.service';
import { ProductsService } from './products/products.service';

@Module({
  imports: [],
  controllers: [AppController, ProductsController],
  providers: [AppService, PrismaService, ProductsService],
})
export class AppModule {}
