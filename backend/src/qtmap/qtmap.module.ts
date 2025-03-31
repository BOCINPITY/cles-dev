import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { QtmapService } from './qtmap.service';
import { QtmapController } from './qtmap.controller';
import { QTMapSchema } from './schema/qtmap.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'QTMap', schema: QTMapSchema }]), // 注册 Mongoose 模型
  ],
  controllers: [QtmapController],
  providers: [QtmapService],
  exports: [QtmapService, MongooseModule], // 导出服务和模型以供其他模块使用
})
export class QtmapModule {}
