import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class Middlewares implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log(
      `[Middleware] ${req.method} ${req.url} - ${new Date().toISOString()}`,
    );
    next();
  }
}
