import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { VendorService } from './vendor/vendor.service';
import { VendorModule } from './vendor/vendor.module';

@Module({
  imports: [UserModule, VendorModule],
  controllers: [AppController],
  providers: [AppService, VendorService],
})
export class AppModule {}
