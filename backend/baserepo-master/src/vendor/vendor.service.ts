import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'service/prisma.service';
import { CreateProduct } from './dto/vendor.dto';

@Injectable()
export class VendorService {
  constructor(private prisma: PrismaService) {}
  async CreateProduct(user, body: CreateProduct) {
    if (!user) throw new HttpException('User not found', 404);
    if (user['role'] != 'VENDOR')
      throw new HttpException('action not allowed', 403);
    const product = await this.prisma.product.create({
      data: {
        name: body.name,
        image_url: body.image_url,
        price: body.price,
        vendor_id: user['id'],
      },
    });
    return product;
  }
  async updateProduct(id, user, body: CreateProduct) {
    if (!user) throw new HttpException('User not found', 404);
    if (user['role'] != 'VENDOR')
      throw new HttpException('action not allowed', 403);
    const product = await this.prisma.product.update({
      where: {
        id: id,
      },
      data: {
        name: body.name,
        image_url: body.image_url,
        price: body.price,
        vendor_id: user['id'],
      },
    });
    return product;
  }
  async deleteProduct(id, user) {
    if (!user) throw new HttpException('User not found', 404);
    if (user['role'] != 'VENDOR')
      throw new HttpException('action not allowed', 403);
    const product = await this.prisma.product.delete({
      where: {
        id: id,
        vendor_id: user['id'],
      },
    });
    return product;
  }
  async getAllProducts(user) {
    if (!user) throw new HttpException('User not found', 404);
    if (user['role'] != 'VENDOR')
      throw new HttpException('action not allowed', 403);
    const products = await this.prisma.product.findMany({
      where: {
        vendor_id: user['id'],
      },
    });
    return products;
  }
  async getProduct(id, user) {
    if (!user) throw new HttpException('User not found', 404);
    if (user['role'] != 'VENDOR')
      throw new HttpException('action not allowed', 403);
    const products = await this.prisma.product.findFirst({
      where: {
        id: id,
        vendor_id: user['id'],
      },
    });
    return products;
  }
}
