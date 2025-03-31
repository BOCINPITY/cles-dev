import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsNumber,
  IsString,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

class ObstacleDto {
  @ApiProperty({
    example: 100,
    description: '障碍物的 X 坐标。',
  })
  @IsNumber()
  x: number;

  @ApiProperty({
    example: 200,
    description: '障碍物的 Y 坐标。',
  })
  @IsNumber()
  y: number;

  @ApiProperty({ example: 50, description: '障碍物的宽度。' })
  @IsNumber()
  width: number;

  @ApiProperty({ example: 50, description: '障碍物的高度。' })
  @IsNumber()
  height: number;

  @ApiProperty({
    example: 'rect',
    required: false,
    description: '障碍物的形状（例如：矩形、圆形）。',
  })
  @IsString()
  @IsOptional()
  shape?: string;

  @ApiProperty({
    example: '#ff0000',
    required: false,
    description: '障碍物的颜色（十六进制格式）。',
  })
  @IsString()
  @IsOptional()
  color?: string;

  @ApiProperty({
    example: 1,
    required: false,
    description: '障碍物的缩放比例（默认为 1）。',
  })
  @IsNumber()
  @IsOptional()
  scale?: number;

  @ApiProperty({
    example: 0,
    required: false,
    description: '障碍物的旋转角度（单位：度）。',
  })
  @IsNumber()
  @IsOptional()
  rotate?: number;
}

export class CreateQtMapDto {
  @ApiProperty({
    example: 800,
    description: '地图的宽度（单位：像素）。',
  })
  @IsNumber()
  width: number;

  @ApiProperty({
    example: 600,
    description: '地图的高度（单位：像素）。',
  })
  @IsNumber()
  height: number;

  @ApiProperty({
    type: [ObstacleDto],
    description: '要放置在地图上的障碍物数组。',
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ObstacleDto)
  obstacles: ObstacleDto[];
}
