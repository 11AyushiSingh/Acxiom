import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'service/prisma.service';
import * as bcrypt from 'bcrypt';
import { env } from 'process';
import { LoginDto, SignupDto, UpdateMembership } from './dto/user.dto';
import { JsonWebTokenService } from 'service/jwt.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private jsonWebTokenService: JsonWebTokenService,
    private jwtService: JwtService,
  ) {}
  async signup(body: SignupDto): Promise<any> {
    const existing_user = await this.prisma.user.findFirst({
      where: {
        user_email: body.user_email.toLowerCase(),
      },
    });
    if (existing_user) throw new HttpException(' Email already exist.', 403);
    const pass = await bcrypt.hashSync(body.password, parseInt(env.BYCRPT_KEY));
    const data = await this.prisma.user.create({
      data: {
        first_name: body.first_name,
        last_name: body.last_name,
        user_email: body.user_email.trim().toLowerCase(),
        password: pass,
        phone_number: body.phone_number,
        category_id: body.category,
        // // Optional fields
      },
    });
    return data;
  }
  async login(body: LoginDto): Promise<any> {
    const existing_user = await this.prisma.user.findFirst({
      where: {
        user_email: body.user_email.toLowerCase(),
      },
    });
    if (!existing_user) throw new HttpException('Email not found.', 403);
    const pass = await bcrypt.compareSync(
      body.password,
      existing_user.password,
    );
    if (!pass) throw new HttpException('Invalid password.', 403);
    delete existing_user['password'];
    const token = await this.jsonWebTokenService.createJwtToken(existing_user);
    return { token: token };
  }
  async createUser(user, body: SignupDto) {
    console.log('user', user);
    if (!user) throw new HttpException('User not found', 404);
    if (user['role'] != 'ADMIN')
      throw new HttpException('action not allowed', 403);
    const pass = await bcrypt.hashSync(body.password, parseInt(env.BYCRPT_KEY));
    return this.prisma.user.create({
      data: {
        first_name: body.first_name,
        last_name: body.last_name,
        user_email: body.user_email.trim().toLowerCase(),
        password: pass,
        phone_number: body.phone_number,
        category_id: body.category,
        role: body.role,
      },
    });
  }
  async updateUser(id, user, body: SignupDto) {
    console.log('user', user);
    if (!user) throw new HttpException('User not found', 404);
    if (user['role'] != 'ADMIN')
      throw new HttpException('action not allowed', 403);
    const pass = await bcrypt.hashSync(body.password, parseInt(env.BYCRPT_KEY));
    return this.prisma.user.update({
      where: {
        id: id,
      },
      data: {
        first_name: body.first_name,
        last_name: body.last_name,
        user_email: body.user_email.trim().toLowerCase(),
        password: pass,
        phone_number: body.phone_number,
        category_id: body.category,
        role: body.role,
      },
    });
  }
  async updateMembership(user, body: UpdateMembership) {
    if (!user) throw new HttpException('User not found', 404);
    if (user['role'] != 'ADMIN')
      throw new HttpException('action not allowed', 403);
    return await this.prisma.user.update({
      where: {
        id: user['id'],
      },
      data: {
        membership_start: body.membership_start,
        membership_end: body.membership_end,
      },
    });
  }
}
