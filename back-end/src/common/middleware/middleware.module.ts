import { MiddlewareConsumer, Module } from '@nestjs/common';
import { Middlewares } from './middleware';

@Module({})
export class MiddlewareModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(Middlewares).forRoutes('*');
  }
}
