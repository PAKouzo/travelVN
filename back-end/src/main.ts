import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = app.get(ConfigService).get('PORT');

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(port);
  return `Server is running in ${port}`;
}
bootstrap();
