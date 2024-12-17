import { MiddlewareConsumer, Module } from '@nestjs/common';
import { RegisterMiddleware } from './register.middleware';

@Module({})
export class RegisterMiddlewareModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RegisterMiddleware).forRoutes('*');
  }
}
