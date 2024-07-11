import { UserRole } from '@prisma/client';
import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';
export class SignupDto {
  @IsNotEmpty()
  first_name: string;
  @IsNotEmpty()
  @IsOptional()
  last_name: string;
  @IsNotEmpty()
  @IsEmail()
  user_email: string;
  @IsNotEmpty()
  password: string;
  @IsNotEmpty()
  phone_number: number;
  @IsOptional()
  user_location: string;
  @IsOptional()
  user_info: string;
  @IsOptional()
  category: number;
  @IsOptional()
  role: UserRole;
  @IsOptional()
  membership_start: string;
  @IsOptional()
  membership_end: string;
}
export class LoginDto {
  @IsNotEmpty()
  user_email: string;
  @IsNotEmpty()
  password: string;
}
export class UpdateMembership {
  @IsNotEmpty()
  membership_start: string;
  @IsNotEmpty()
  membership_end: string;
}
