import { Global, Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { RedisService } from './redis.service';

@Global()
@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: '127.0.0.1',
        port: 6379,
      },
    }),
  ],
  providers: [RedisService],
  exports: [RedisService],
})
export class RedisModule {}
