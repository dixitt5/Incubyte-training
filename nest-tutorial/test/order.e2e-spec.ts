import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';
import * as request from 'supertest';
import { PrismaService } from '../src/prisma/prisma.service';

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
  });

  it('/orders (POST)', async () => {
    const orderToBeAdded = {
      productId: 1,
      quantity: 1,
    };
    const response = await request(app.getHttpServer())
      .post('/order')
      .send(orderToBeAdded)
      .expect(201);

    expect(response.body).toMatchObject({
      id: expect.any(Number),
      ...orderToBeAdded,
    });
    await prismaService.order.findMany().then((orders) => {
      expect(orders).toStrictEqual([response.body]);
    });
  });

  it('/orders (GET) ', async () => {
    const orderToBeAdded = {
      productId: 1,
      quantity: 1,
    };
    const response = await prismaService.order.create({ data: orderToBeAdded });

    const getResponse = await request(app.getHttpServer())
      .get('/order')
      .expect(200);

    expect(getResponse.body).toStrictEqual([response]);
    prismaService.order.findMany().then((orders) => {
      expect(orders).toStrictEqual([response]);
    });
  });
});
