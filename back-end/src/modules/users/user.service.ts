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
import { passwordHashing } from 'src/common/bcrypt/bcrypt';
import {
  checkFormatEmail,
  checkFormatPhoneNumber,
} from 'src/common/regex/regex';
import { UpdateDto } from './dto/update.dto';
import { MailerService } from '@nestjs-modules/mailer';
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';
import { RedisService } from 'src/database/redis/redis.service';

@Injectable()
export default class UserService {
  constructor(
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
    private readonly mailerService: MailerService,
    // private readonly redisService: RedisService
  ) {}

  //register
  async register(data: RegisterDto): Promise<Users> {
    const { email, phone_number, password, re_password } = data;
    const verification_code = uuidv4();
    // const codeExpired = dayjs().add(2, 'minutes').toISOString();
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

    // await this.redisService.set(
    //   `verification_code:${email}`,
    //   { code: verification_code, codeExpired },
    //   120,
    // );

    const newUser = this.userRepository.create({
      ...data,
      password: passwordHashed,
    });

    try {
      await this.userRepository.save(newUser);
      this.mailerService.sendMail({
        to: newUser.email,
        subject: 'Verify account!',
        template: 'register.hbs',
        context: {
          name: newUser.full_name,
          code: verification_code,
        }
      })
      return newUser;
    } catch (errors) {
      throw new InternalServerErrorException('Failed to create user!');
    }
  }

  // async verifyAccount(email: string, code: string): Promise<boolean> {
  //   const data = await this.redisService.get(`verification_code:${email}`);
  
  //   if (!data) {
  //     throw new BadRequestException('Verification code is invalid or expired!');
  //   }
  
  //   const { code: savedCode, codeExpired } = data;
  
  //   if (savedCode !== code) {
  //     throw new BadRequestException('Invalid verification code!');
  //   }
  
  //   if (dayjs().isAfter(dayjs(codeExpired))) {
  //     throw new BadRequestException('Verification code has expired!');
  //   }
  
  //   await this.redisService.delete(`verification_code:${email}`);
  //   return true;
  // }

  //find user by email
  async findByEmail(email: string): Promise<Users> {
    return this.userRepository.findOneBy({ email: email });
  }

  //update user
  async update(id: number, data: UpdateDto): Promise<any> {
    return this.userRepository.update(id, data);
  }

  //delete user
  async delete(id: number) {
    return this.userRepository.delete(id);
  }
}
