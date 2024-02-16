import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';
import * as request from 'supertest';
import { PrismaService } from '../src/prisma/prisma.service';
import { ProductRequestDTO } from '../src/products/productRequestDTO';

describe('OrderController (e2e)', () => {
  let app: INestApplication;
  let prismaService;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleFixture.createNestApplication();
    prismaService = moduleFixture.get<PrismaService>(PrismaService);
    await app.init();
  });

  afterEach(async () => {
    await prismaService.order.deleteMany();
    await prismaService.product.deleteMany();
  });

  it('/orders (POST)', async () => {
    const existingProduct = await prismaService.product.create({
      data: {
        name: 'test',
        price: 10,
      },
    });
    const orderToBeAdded = {
      productId: existingProduct.id,
      quantity: 1,
    };
    const response = await request(app.getHttpServer())
      .post('/order')
      .send(orderToBeAdded)
      .expect(201);

    expect(response.body).toMatchObject({
      id: expect.any(Number),
      quantity: 1,
      product: { id: existingProduct.id, name: 'test', price: 10 },
    });
    await prismaService.order
      .findMany({ include: { product: true } })
      .then((orders) => {
        expect(orders).toMatchObject([response.body]);
      });
  });

  it('/orders (GET) ', async () => {
    const existingProduct = await prismaService.product.create({
      data: {
        name: 'test',
        price: 10,
      },
    });
    const existingOrder = {
      productId: existingProduct.id,
      quantity: 1,
    };
    const existingSavedOrder = await prismaService.order.create({
      data: existingOrder,
    });

    const getResponse = await request(app.getHttpServer())
      .get('/order')
      .expect(200);

    const expectedResponse = {
      id: existingSavedOrder.id,
      quantity: existingSavedOrder.quantity,
      product: { id: existingProduct.id, name: 'test', price: 10 },
    };
    expect(getResponse.body).toStrictEqual([expectedResponse]);
  });

  it('/orders (POST) - should return 400 if product does not exist', async () => {
    const orderToBeAdded = {
      productId: 1,
      quantity: 1,
    };
    const response = await request(app.getHttpServer())
      .post('/order')
      .send(orderToBeAdded)
      .expect(400);
    expect(response.body).toMatchObject({
      statusCode: 400,
      message: 'Product does not exist',
      error: 'Bad Request',
    });
  });
});
