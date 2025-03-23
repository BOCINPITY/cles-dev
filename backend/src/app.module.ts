import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MapModule } from './map/map.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    MongooseModule.forRoot('mongodb://120.26.238.102:27017/mogotest', {}),
    MapModule,
  ],
})
export class AppModule {}
