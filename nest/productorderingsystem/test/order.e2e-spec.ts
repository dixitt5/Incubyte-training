import { AppModule } from '../src/app.module';
import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';

describe('OrderController (e2e)', () => {
  let app: INestApplication;
  beforeEach(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
  });

  it('/ (GET)', () => {
    request(app.getHttpServer()).get('/').expect(200).expect('Hello World!');
  });
});
