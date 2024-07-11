import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { VendorController } from './vendor.controller';
import { VendorService } from './vendor.service';
import { PrismaService } from 'service/prisma.service';
import { JsonWebTokenService } from 'service/jwt.service';
import { LoggerMiddleware } from 'middleware/application.middleware';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
    }),
  ],
  controllers: [VendorController],
  providers: [VendorService, PrismaService, JsonWebTokenService],
})
export class VendorModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('vendor');
  }
}
