import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from '@hapi/joi';
import { DatabaseModule } from 'src/database/postgresql/database.module';
import { Modules } from '@modules/index.module';
import { MiddlewareModule } from '@common/middleware/middleware.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from '@common/auth/passport/jwt-auth.guard';
import { NodeMailerModule } from '@common/email/module/nodemailer.module';
import { RedisModule } from './database/redis/redis.module';
import { AuthModule } from '@common/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
        PORT: Joi.number(),
      }),
    }),
    DatabaseModule,
    MiddlewareModule,
    Modules,
    NodeMailerModule,
    // RedisModule,
    AuthModule,
  ],
  controllers: [],
  providers: [{ provide: APP_GUARD, useClass: JwtAuthGuard }],
})
export class AppModule {}
