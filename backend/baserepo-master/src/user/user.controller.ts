import { Body, Controller, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { BaseController } from 'controller/base.controller';
import { LoginDto, SignupDto, UpdateMembership } from './dto/user.dto';
import { User } from 'decorators/user.decorator';

@Controller('')
export class UserController extends BaseController {
  constructor(private readonly userService: UserService) {
    super();
  }

  @Post('user/signup')
  async signup(@Body() body: SignupDto): Promise<any> {
    return this.standardResponse(await this.userService.signup(body));
  }
  @Post('user/login')
  async login(@Body() body: LoginDto): Promise<any> {
    return this.standardResponse(await this.userService.login(body));
  }
  @Post('admin/create-user')
  async createUser(
    @Body() body: SignupDto,
    @User() user: object,
  ): Promise<any> {
    return this.standardResponse(await this.userService.createUser(user, body));
  }
  @Post('admin/update-user/:id')
  async updateUser(
    @Param('id') id: number,
    @Body() body: SignupDto,
    @User() user: object,
  ): Promise<any> {
    return this.standardResponse(
      await this.userService.updateUser(id, user, body),
    );
  }
  @Post('admin/update-membership')
  async updateMembership(
    @Body() body: UpdateMembership,
    @User() user: object,
  ): Promise<any> {
    return this.standardResponse(
      await this.userService.updateMembership(user, body),
    );
  }
}
