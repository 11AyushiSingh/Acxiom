import { HttpException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as process from 'process';
import { TokenExpiredError } from 'jsonwebtoken';
import { JwtExpirationConstants } from 'constant/constants';

@Injectable()
export class JsonWebTokenService {
  constructor(private readonly jwtService: JwtService) {}
  async createJwtToken(user: object): Promise<string> {
    try {
      const accessToken = await this.jwtService.sign(user, {
        expiresIn: JwtExpirationConstants.EXPIRATION_LIMIT,
      });
      return accessToken;
    } catch (error) {
      throw new HttpException(error.message, 400);
    }
  }

  async verifyJwtToken(token: string): Promise<object> {
    try {
      const user = await this.jwtService.verify(token, {
        secret: process.env.JWT_SECRET,
      });
      return user;
    } catch (error) {
      if (error instanceof TokenExpiredError) {
        // Token has expired
        throw new HttpException('Token has expired', 440);
      } else {
        throw new HttpException('Invalid token', 440);
      }
    }
  }
}
