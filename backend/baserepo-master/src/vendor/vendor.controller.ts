import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BaseController } from 'controller/base.controller';
import { VendorService } from './vendor.service';
import { CreateProduct } from './dto/vendor.dto';
import { User } from 'decorators/user.decorator';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('vendor')
@Controller('vendor')
export class VendorController extends BaseController {
  constructor(private readonly vendorService: VendorService) {
    super();
  }
  @Post('create-product')
  async CreateProduct(
    @Body() body: CreateProduct,
    @User() user: object,
  ): Promise<any> {
    return this.standardResponse(
      await this.vendorService.CreateProduct(user, body),
    );
  }
  @Patch('update-product/:id')
  async updateProduct(
    @Body() body: CreateProduct,
    @User() user: object,
    @Param('id') id: number,
  ): Promise<any> {
    return this.standardResponse(
      await this.vendorService.updateProduct(id, user, body),
    );
  }
  @Delete('delete-product/:id')
  async deleteProduct(
    @User() user: object,
    @Param('id') id: number,
  ): Promise<any> {
    return this.standardResponse(
      await this.vendorService.deleteProduct(id, user),
    );
  }
  @Get('getall-product')
  async getAllproduct(@User() user: object): Promise<any> {
    return this.standardResponse(await this.vendorService.getAllProducts(user));
  }
  @Get('get-product/:id')
  async getproduct(
    @User() user: object,
    @Param('id') id: number,
  ): Promise<any> {
    return this.standardResponse(await this.vendorService.getProduct(id, user));
  }
}
