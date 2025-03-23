// src/map/map.module.ts
import { MongooseModule } from '@nestjs/mongoose';
import { Map, MapSchema } from './entities/map.schema';
import { MapService } from './map.service';
import { MapController } from './map.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [MongooseModule.forFeature([{ name: Map.name, schema: MapSchema }])],
  controllers: [MapController],
  providers: [MapService],
})
export class MapModule {}
