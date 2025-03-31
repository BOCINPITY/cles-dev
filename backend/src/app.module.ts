import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { QtmapModule } from './qtmap/qtmap.module';
import { PathModule } from './path/path.module';

@Module({
  controllers: [AppController],
  providers: [],
  imports: [
    MongooseModule.forRoot('mongodb://120.26.238.102:27017/mogotest', {}),
    QtmapModule,
    PathModule,
  ],
})
export class AppModule {}
