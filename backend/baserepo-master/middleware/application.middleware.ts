import { HttpException, Injectable, NestMiddleware } from '@nestjs/common';
import { MiddlewareBuilder } from '@nestjs/core';
import { NextFunction, Request, Response } from 'express';
import { JsonWebTokenService } from 'service/jwt.service';
import { PrismaService } from 'service/prisma.service';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(
    private readonly prisma: PrismaService,
    private jwtService: JsonWebTokenService,
  ) {}

  async use(req: Request, res: Response, next: NextFunction) {
    if (!req?.headers?.authorization) {
      throw new HttpException('Please Login to your account', 400);
    }
    const token = req.headers.authorization.split(' ')[1];
    const user = await this.jwtService.verifyJwtToken(token);
    console.log('middleware', user);
    req['user'] = user;

    const dbUser = await this.prisma.user.findFirst({
      where: {
        // @ts-ignore
        id: user.id,
      },
    });
    // if (dbUser.status !== USER_STATUSES.ACTIVE) {
    //   throw new HttpException(this.messageService.ACCOUNT_BLOCKED, 403);
    // }
    next();
  }
}
