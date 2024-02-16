import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { InternalServerExceptionFilter } from './order/internal-server-exception.filiter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(
    new InternalServerExceptionFilter(app.get(HttpAdapterHost)),
  );
  await app.listen(3000);
}
bootstrap();
