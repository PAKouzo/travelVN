import {
  Body,
  Controller,
  Delete,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import UserService from './user.service';
import { UpdateDto } from './dto/update.dto';


@Controller('users')
export default class UserController {
  constructor(private readonly userService: UserService) {}

  @Patch(':id')
  update(@Param('id') id: number, @Body() data: UpdateDto) {
    return this.userService.update(id, data);
  }

  @Delete('id')
  delete(@Param('id') id: number) {
    return this.userService.delete(id);
  }
}
