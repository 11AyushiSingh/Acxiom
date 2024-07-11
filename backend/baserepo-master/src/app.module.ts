import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { VendorModule } from './vendor/vendor.module';
import { UserViewModule } from './user-view/user-view.module';

@Module({
  imports: [UserModule, VendorModule, UserViewModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
