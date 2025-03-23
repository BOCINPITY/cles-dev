// src/map/map.controller.ts
import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateMapDto } from './dto/create-map.dto';
import { MapService } from './map.service';
import { MapResponseDto } from './dto/map-response.dto';

@ApiTags('地图管理')
@Controller('maps')
export class MapController {
  constructor(private readonly mapService: MapService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiBody({ type: CreateMapDto })
  @ApiOperation({ summary: '创建地图（开发中）' })
  @ApiResponse({
    status: 201,
    description: '地图创建成功',
    type: MapResponseDto, // 修改响应类型
  })
  @ApiResponse({
    status: 400,
    description: '参数验证失败',
  })
  async create(@Body() createMapDto: CreateMapDto): Promise<MapResponseDto> {
    console.log('Received create request:', createMapDto);
    return this.mapService.createMap(createMapDto);
  }
}
