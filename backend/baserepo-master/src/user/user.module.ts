import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaService } from 'service/prisma.service';
import { JsonWebTokenService } from 'service/jwt.service';
import { JwtModule } from '@nestjs/jwt';
import { LoggerMiddleware } from 'middleware/application.middleware';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
    }),
  ],
  providers: [UserService, PrismaService, JsonWebTokenService],
  controllers: [UserController],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('admin/create-user');
  }
}
