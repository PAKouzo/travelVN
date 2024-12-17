import { IsDateString, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class RegisterDto {
  @IsEmail()
  @IsNotEmpty({ message: 'Email is not empty!' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'Phone number is not empty!' })
  phone_number: string;

  @IsString()
  @IsNotEmpty({ message: 'Fullname is not empty!' })
  full_name: string;

  @IsDateString()
  @IsNotEmpty({ message: 'Birthday is not empty!' })
  birthday: Date;

  @IsString()
  @IsNotEmpty({ message: 'Password is not empty!' })
  password: string;

  @IsString()
  @IsNotEmpty({ message: 'Re-password is not empty!' })
  re_password: string;
}
