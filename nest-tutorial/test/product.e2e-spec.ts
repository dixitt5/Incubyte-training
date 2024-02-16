import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { AppModule } from '../src/app.module';
import * as request from 'supertest';
import { ProductRequestDTO } from '../src/products/productRequestDTO';
import { ProductResponseDTO } from '../src/products/productResponseDTO';
import { PrismaService } from '../src/prisma/prisma.service';

describe('ProductController (e2e)', () => {
  let app: INestApplication;
  let prismaService;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    prismaService = moduleFixture.get<PrismaService>(PrismaService);
    await app.init();
  });

  afterEach(async () => {
    await prismaService.product.deleteMany();
  });

  it('/products (GET)', async () => {
    const productToBeAdded: ProductRequestDTO = { name: 'test', price: 10 };
    await request(app.getHttpServer())
      .post('/products')
      .send(productToBeAdded)
      .expect(201);
    const expectedProduct: ProductResponseDTO = {
      id: expect.any(Number),
      ...productToBeAdded,
    };

    const response = await request(app.getHttpServer())
      .get('/products')
      .expect(200);
    expect(response.body).toMatchObject([expectedProduct]);
  });

  it('/products (POST)', async () => {
    const productToBeAdded: ProductRequestDTO = { name: 'test', price: 10 };
    const response = await request(app.getHttpServer())
      .post('/products')
      .send(productToBeAdded)
      .expect(201);

    const expectedProduct: ProductResponseDTO = {
      id: expect.any(Number),
      ...productToBeAdded,
    };
    expect(response.body).toMatchObject(expectedProduct);
    await prismaService.product.findMany().then((products) => {
      expect(products).toMatchObject([expectedProduct]);
    });
  });

  it('/products (POST) - should return 400 if price is Invalid', async () => {
    const productToBeAdded = { name: 'test', price: 'abc' };
    const response = await request(app.getHttpServer())
      .post('/products')
      .send(productToBeAdded)
      .expect(400);

    expect(response.body).toMatchObject({
      statusCode: 400,
      message: ['price must be a number'],
    });
  });

  it('/products (POST) - should return 400 if name is Invalid', async () => {
    const productToBeAdded = { name: 10, price: 10 };
    const response = await request(app.getHttpServer())
      .post('/products')
      .send(productToBeAdded)
      .expect(400);

    expect(response.body).toMatchObject({
      statusCode: 400,
    });

    expect(response.body.message).toContain(
      'name must be a string less than or equal to 10 characters',
    );
  });
});
