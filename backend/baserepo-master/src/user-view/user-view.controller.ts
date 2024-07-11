import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { BaseController } from 'controller/base.controller';
import { UserViewService } from './user-view.service';
import { User } from 'decorators/user.decorator';
import { AddGuest, AddToCart } from './dto/user-view.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('user-view')
@Controller('user-view')
export class UserViewController extends BaseController {
  constructor(private readonly userViewService: UserViewService) {
    super();
  }
  @Post('add-guest')
  async CreateProduct(
    @Body() body: AddGuest,
    @User() user: object,
  ): Promise<any> {
    return this.standardResponse(
      await this.userViewService.addGuest(user, body),
    );
  }
  @Delete('delete-guest/:id')
  async deleteProduct(
    @Param('id') id: number,
    @User() user: object,
  ): Promise<any> {
    return this.standardResponse(
      await this.userViewService.deleteGuest(id, user),
    );
  }
  @Get('guest-list')
  async getList(@User() user: object): Promise<any> {
    return this.standardResponse(await this.userViewService.getGuestList(user));
  }
  @Get('vendor-list')
  async vendorList(@User() user: object): Promise<any> {
    return this.standardResponse(await this.userViewService.vendorList(user));
  }
  @Post('add-to-cart')
  async addToCart(@User() user: object, @Body() body: AddToCart): Promise<any> {
    return this.standardResponse(
      await this.userViewService.addtoCart(user, body),
    );
  }
  @Get('get-cart')
  async getCart(@User() user: object): Promise<any> {
    return this.standardResponse(await this.userViewService.getCartItems(user));
  }
  @Delete('remove-cart-item/:id')
  async removeItem(
    @User() user: object,
    @Param('id') id: number,
  ): Promise<any> {
    return this.standardResponse(
      await this.userViewService.deleteItem(id, user),
    );
  }
}
