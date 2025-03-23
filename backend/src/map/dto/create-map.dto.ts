// src/map/dto/map-response.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class CreateMapDto {
  @ApiProperty({ example: 800, description: '地图宽度' })
  width: number;

  @ApiProperty({ example: 600, description: '地图高度' })
  height: number;

  @ApiProperty({
    example: [{ coordinates: [100, 200] }],
    description: '障碍物坐标列表',
  })
  obstacles: Array<{ coordinates: [number, number] }>;

  @ApiProperty({ example: [50, 50], description: '起点坐标' })
  startPoint: [number, number];

  @ApiProperty({ example: [750, 550], description: '终点坐标' })
  endPoint: [number, number];
}
