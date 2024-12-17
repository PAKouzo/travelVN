import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class RegisterMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log(
      `[Middleware] ${req.method} ${req.url} - ${new Date().toISOString()}`,
    );
    next();
  }
}
