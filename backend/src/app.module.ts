import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    UserModule,
    MongooseModule.forRoot('mongodb://120.26.238.102:27017/mogotest', {}),
  ],
})
export class AppModule {}
