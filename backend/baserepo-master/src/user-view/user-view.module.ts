import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserViewService } from './user-view.service';
import { UserViewController } from './user-view.controller';
import { LoggerMiddleware } from 'middleware/application.middleware';
import { PrismaService } from 'service/prisma.service';
import { JsonWebTokenService } from 'service/jwt.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
    }),
  ],
  providers: [UserViewService, PrismaService, JsonWebTokenService],
  controllers: [UserViewController],
})
export class UserViewModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('user-view');
  }
}
