import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { map, pipe, tap } from 'rxjs';

@Injectable()
export class LogOrderInterceptor implements NestInterceptor {
  private readonly logger = new Logger(LogOrderInterceptor.name);
  intercept(context: ExecutionContext, next: CallHandler) {
    return next.handle().pipe(
      map((data) => {
        this.logger.log(
          `order created with product: ${data.product.name} with quantity: ${data.quantity}`,
        );
        return data;
      }),
    );
  }
}
