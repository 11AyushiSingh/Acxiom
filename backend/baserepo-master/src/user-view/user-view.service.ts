import { HttpException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JsonWebTokenService } from 'service/jwt.service';
import { PrismaService } from 'service/prisma.service';
import { AddGuest, AddToCart } from './dto/user-view.dto';

@Injectable()
export class UserViewService {
  constructor(
    private prisma: PrismaService,
    private jsonWebTokenService: JsonWebTokenService,
    private jwtService: JwtService,
  ) {}
  async addGuest(user, body: AddGuest) {
    if (!user) throw new HttpException('User not found', 404);
    if (user['role'] != 'USER')
      throw new HttpException('action not allowed', 403);
    const addedGuest = await this.prisma.guestlist.create({
      data: {
        name: body.name,
        user_id: user['id'],
      },
    });
    return addedGuest;
  }
  async deleteGuest(id, user) {
    if (!user) throw new HttpException('User not found', 404);
    if (user['role'] != 'USER')
      throw new HttpException('action not allowed', 403);
    const deletedGuest = await this.prisma.guestlist.delete({
      where: {
        id: id,
        user_id: user['id'],
      },
    });
    return deletedGuest;
  }
  async getGuestList(user) {
    if (!user) throw new HttpException('User not found', 404);
    if (user['role'] != 'USER')
      throw new HttpException('action not allowed', 403);
    const guestList = await this.prisma.guestlist.findMany({
      where: {
        user_id: user['id'],
      },
      select: {
        id: true,
        name: true,
      },
    });
    return guestList;
  }
  async vendorList(user) {
    const vendorList = await this.prisma.user.findMany({
      where: {
        role: 'VENDOR',
      },
      select: {
        first_name: true,
        user_email: true,
        category: true,
      },
    });
    return vendorList;
  }
  async addtoCart(user, body: AddToCart) {
    if (!user) throw new HttpException('User not found', 404);
    if (user['role'] != 'USER')
      throw new HttpException('action not allowed', 403);
    const addProduct = await this.prisma.cartItem.create({
      data: {
        product_id: body.product_id,
        user_id: user['id'],
        quantity: body.quantity,
      },
    });
    return addProduct;
  }
  async getCartItems(user) {
    if (!user) throw new HttpException('User not found', 404);
    if (user['role'] != 'USER')
      throw new HttpException('action not allowed', 403);
    const cartItems = await this.prisma.cartItem.findMany({
      where: {
        user_id: user['id'],
      },
      select: {
        id: true,
        product_id: true,
        quantity: true,
        product: {
          select: {
            id: true,
            name: true,
            image_url: true,
            price: true,
          },
        },
      },
    });
    return cartItems;
  }
  async deleteItem(id, user) {
    if (!user) throw new HttpException('User not found', 404);
    if (user['role'] != 'USER')
      throw new HttpException('action not allowed', 403);
    return await this.prisma.cartItem.delete({
      where: {
        id: id,
        user_id: user['id'],
      },
    });
  }
}
