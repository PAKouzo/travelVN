import { IsOptional, IsString } from 'class-validator';

export class UpdateDto {
  id: number;

  @IsOptional()
  @IsString()
  full_name: string;

  @IsOptional()
  @IsString()
  address: string;

  @IsOptional()
  @IsString()
  phone_number: string;
}
