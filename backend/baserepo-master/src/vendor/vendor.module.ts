import { Module } from '@nestjs/common';
import { VendorController } from './vendor.controller';
import { VendorService } from './vendor.service';
import { PrismaService } from 'service/prisma.service';
import { JsonWebTokenService } from 'service/jwt.service';

@Module({
  controllers: [VendorController],
  providers: [VendorService, PrismaService, JsonWebTokenService],
})
export class VendorModule {}
