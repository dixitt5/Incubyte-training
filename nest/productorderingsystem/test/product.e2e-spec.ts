import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { ProductRequestDTO } from '../src/products/productRequestDTO';
import { ProductResponseDTO } from '../src/products/productResponseDTO';
import { PrismaService } from '../src/prisma/prisma.service';

describe('ProductController (e2e)', () => {
  let app: INestApplication;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
      providers: [{ provide: PrismaService, useValue: prismaService }],
    }).compile();
    prismaService = moduleFixture.get<PrismaService>(PrismaService);
    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterEach(async () => {
    await prismaService.product.deleteMany();
  });

  it('/products (GET)', async () => {
    // arrange
    const productRequest: ProductRequestDTO = { name: 'test', price: 100 };
    await prismaService.product.create({ data: productRequest });

    // action
    const productResponse = await request(app.getHttpServer())
      .get('/products')
      .expect(200);

    // assert
    const expectedProductResponse: ProductResponseDTO = {
      id: expect.any(Number),
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
      id: expect.any(Number),
      name: 'test',
      price: 100,
    };

    expect(productResponse.body).toMatchObject(expectedProductResponse);
    // checking the connection with the database
    await prismaService.product.findMany().then((products) => {
      expect(products).toMatchObject([expectedProductResponse]);
    });
  });
});
