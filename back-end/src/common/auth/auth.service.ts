import { JwtService } from '@nestjs/jwt';
import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import UserService from '../../modules/users/user.service';
import { comparePassword } from 'src/common/bcrypt/bcrypt';
import { RegisterDto } from '../../modules/users/dto/register.dto';

@Injectable()
export default class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
  ) {}

  //register
  async register(data: RegisterDto): Promise<any> {
    return this.userService.register(data);
  }

  //login
  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findByEmail(email);
    if (!user) return null;

    const checkPassword = await comparePassword(password, user.password);
    if (!checkPassword) return null;

    return user;
  }

  async login(user: any): Promise<any> {
    const payload = { id: user.id, email: user.email, name: user.full_name };

    return {
      user: {
        id: user.id,
        email: user.email,
        name: user.full_name,
      },
      access_token: this.jwtService.sign(payload),
    };
  }
}
