import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { ProductRequestDTO } from '../src/products/productRequestDTO';
import { ProductResponseDTO } from '../src/products/productResponseDTO';

describe('ProductController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/products (GET)', async () => {
    // arrange
    const productRequest: ProductRequestDTO = { name: 'test', price: 100 };
    await request(app.getHttpServer())
      .post('/products')
      .send(productRequest)
      .expect(201);

    // action
    const productResponse = await request(app.getHttpServer())
      .get('/products')
      .expect(200);
    // assert
    const expectedProductResponse: ProductResponseDTO = {
      id: 1,
      ...productRequest,
    };
    expect(productResponse.body).toMatchObject([expectedProductResponse]);
  });

  it('/products (POST)', async () => {
    const productResponse = await request(app.getHttpServer())
      .post('/products')
      .send({ name: 'test', price: 100 })
      .expect(201);

    const expectedProductResponse: ProductResponseDTO = {
      id: 1,
      name: 'test',
      price: 100,
    };
    expect(productResponse.body).toMatchObject(expectedProductResponse);
  });
});
