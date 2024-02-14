import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';
import * as request from 'supertest';
import { ProductRequestDTO } from '../src/products/productRequestDTO';
import { ProductResponseDTO } from '../src/products/productResponseDTO';

describe('ProductController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/products (GET)', async () => {
    const productToBeAdded: ProductRequestDTO = { name: 'test', price: 10 };
    await request(app.getHttpServer())
      .post('/products')
      .send(productToBeAdded)
      .expect(201);
    const expectedProduct: ProductResponseDTO = { id: 1, ...productToBeAdded };

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

    const expectedProduct: ProductResponseDTO = { id: 1, ...productToBeAdded };
    expect(response.body).toMatchObject(expectedProduct);
  });
});
