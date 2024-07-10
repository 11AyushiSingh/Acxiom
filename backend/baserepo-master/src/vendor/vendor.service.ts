import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JsonWebTokenService } from 'service/jwt.service';
import { PrismaService } from 'service/prisma.service';

@Injectable()
export class VendorService {
  constructor(
    private prisma: PrismaService,
    private jsonWebTokenService: JsonWebTokenService,
    private jwtService: JwtService,
  ) {}
}
