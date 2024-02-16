import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';

@Catch()
export class InternalServerExceptionFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();

    const httpAdapter = this.httpAdapterHost.httpAdapter;

    let status;
    let message;
    if (!(exception instanceof HttpException)) {
      status = HttpStatus.INTERNAL_SERVER_ERROR;
      message = 'Contact intern. They messed something up';
    } else {
      status = exception.getStatus();
      message = exception.message;
    }

    //
    // const status =
    //   exception instanceof HttpException
    //     ? exception.getStatus()
    //     : HttpStatus.INTERNAL_SERVER_ERROR;
    //
    // const message =
    //   exception instanceof HttpException
    //     ? exception.message
    //     : 'Contact intern. They messed something up';

    const responseBody = {
      statusCode: status,
      message: message,
    };

    httpAdapter.reply(ctx.getResponse(), responseBody, status);
  }
}
