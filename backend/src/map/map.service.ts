// src/map/map.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMapDto } from './dto/create-map.dto';
import { Map } from './entities/map.schema';
import { MapResponseDto } from './dto/map-response.dto';

@Injectable()
export class MapService {
  constructor(
    @InjectModel(Map.name)
    private readonly mapModel: Model<Map>,
  ) {}

  async createMap(createMapDto: CreateMapDto): Promise<MapResponseDto> {
    const createdMap = await this.mapModel.create(createMapDto);
    console.log(createdMap);
    return {
      width: createdMap.width,
      height: createdMap.height,
      obstacles: createdMap.obstacles,
      createdAt: createdMap.createdAt,
      updatedAt: createdMap.updatedAt,
    };
  }
}
