// src/map/dto/map-response.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class MapResponseDto {
  // @ApiProperty({ description: '地图ID' })
  // _id: string;

  @ApiProperty({ example: 800, description: '地图宽度' })
  width: number;

  @ApiProperty({ example: 600, description: '地图高度' })
  height: number;

  @ApiProperty({
    example: [{ coordinates: [100, 200] }],
    description: '障碍物坐标列表',
  })
  obstacles: Array<{ coordinates: [number, number] }>;

  @ApiProperty({ description: '创建时间' })
  createdAt: Date;

  @ApiProperty({ description: '更新时间' })
  updatedAt: Date;
}
