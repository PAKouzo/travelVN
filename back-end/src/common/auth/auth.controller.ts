import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import AuthService from './auth.service';
import { RegisterDto } from '../../modules/users/dto/register.dto';
import { LocalAuthGuard } from './passport/local-auth.guard';
import { Public } from 'src/decorator/customize';

@Controller('auth')
export default class AuthController {
  constructor(private authService: AuthService) {}

  //register
  @Public()
  @Post('register')
  register(@Body() data: RegisterDto) {
    return this.authService.register(data);
  }

  //login
  @Public()
  @Post('login')
  @UseGuards(LocalAuthGuard)
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  //log-out
  @Post('logout')
  @UseGuards(LocalAuthGuard)
  async logout(@Request() req: any) {
    return this.authService.login(req.user);
  }

  //get profile
  @Get('profile')
  getProfile(@Request() req: any) {
    return req.user;
  }
}
