import {
  BadRequestException,
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Users from 'src/entity/users';
import { Repository } from 'typeorm';
import { RegisterDto } from './dto/register.dto';
import passwordHashing from 'src/common/bcrypt/bcrypt';
import checkFormatPhoneNumber from 'src/common/regex/checkPhoneNumber';
import checkFormatEmail from 'src/common/regex/checkEmail';
import { LoginDTO } from './dto/login.dto';

@Injectable()
export default class UserService {
  constructor(
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
  ) {}

  async register(data: RegisterDto) {
    const { email, phone_number, password, re_password } = data;

    const dataExisted = await this.userRepository
      .createQueryBuilder('user')
      .where('user.email = :email', { email })
      .orWhere('user.phone_number = :phone_number', { phone_number })
      .getOne();
    if (dataExisted) {
      if (dataExisted.email === email) {
        throw new ConflictException('Email already used!');
      }
      if (dataExisted.phone_number === phone_number) {
        throw new ConflictException('Phone number already used!');
      }
    }

    if (!checkFormatPhoneNumber(phone_number)) {
      throw new BadRequestException(
        'The phone number is not in correct format!',
      );
    }

    if (!checkFormatEmail(email)) {
      throw new BadRequestException('The email is not in correct format!');
    }

    if (password !== re_password) {
      throw new BadRequestException('Please confirm your password again!');
    }

    const passwordHashed = await passwordHashing(data.password);

    const newUser = this.userRepository.create({
      ...data,
      password: passwordHashed,
    });

    try {
      await this.userRepository.save(newUser);
      return newUser;
    } catch (errors) {
      throw new InternalServerErrorException('Failed to create user!');
    }
  }

  async login(data: LoginDTO) {
    
  }
}
