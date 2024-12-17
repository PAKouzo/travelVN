import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import UserService from './user.service';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export default class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  register(@Body() data: RegisterDto) {
    return this.userService.register(data);
  }
}
