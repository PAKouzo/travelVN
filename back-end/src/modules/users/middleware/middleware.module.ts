import { Module } from '@nestjs/common';
import { RegisterMiddlewareModule } from './register/register.middleware.module';

@Module({
  imports: [RegisterMiddlewareModule],
})
export class MiddlewareModule {}
