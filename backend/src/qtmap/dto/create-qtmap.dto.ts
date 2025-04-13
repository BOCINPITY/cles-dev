import { ApiProperty } from '@nestjs/swagger';
import {
  IsNumber,
  IsString,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

class RectDto {
  @ApiProperty({
    example: 100,
    description: '矩形的 X 坐标。',
  })
  @IsNumber()
  x: number;

  @ApiProperty({
    example: 200,
    description: '矩形的 Y 坐标。',
  })
  @IsNumber()
  y: number;

  @ApiProperty({ example: 50, description: '矩形的宽度。' })
  @IsNumber()
  width: number;

  @ApiProperty({ example: 50, description: '矩形的高度。' })
  @IsNumber()
  height: number;
  @ApiProperty({
    example: '#ff0000',
    required: false,
    description: '矩形的填充颜色（十六进制格式）。',
  })
  @IsString()
  @IsOptional()
  fill: string;
  @ApiProperty({
    example: '#ff0000',
    required: false,
    description: '矩形的边框颜色。',
  })
  @IsString()
  @IsOptional()
  stroke: string;
  @ApiProperty({
    example: 2,
    required: false,
    description: '矩形的边框大小。',
  })
  @IsNumber()
  @IsOptional()
  strokeWidth: number;
  @ApiProperty({
    example: 'rectangle',
    required: false,
    description: '矩形的形状（例如：矩形、圆形）。',
  })
  @IsString()
  @IsOptional()
  shape: string;
}

class CircleDto {
  @ApiProperty({
    example: 100,
    description: '圆形的 X 坐标。',
  })
  @IsNumber()
  x: number;

  @ApiProperty({
    example: 200,
    description: '圆形的 Y 坐标。',
  })
  @IsNumber()
  y: number;

  @ApiProperty({ example: 50, description: '圆形的半径。' })
  @IsNumber()
  radius: number;
  @ApiProperty({
    example: '#ff0000',
    required: false,
    description: '圆形的填充颜色（十六进制格式）。',
  })
  @IsString()
  @IsOptional()
  fill: string;
  @ApiProperty({
    example: '#ff0000',
    required: false,
    description: '圆形的边框颜色。',
  })
  @IsString()
  @IsOptional()
  stroke: string;
  @ApiProperty({
    example: 2,
    required: false,
    description: '圆形的边框大小。',
  })
  @IsNumber()
  @IsOptional()
  strokeWidth: number;
  @ApiProperty({
    example: 'circle',
    required: false,
    description: '圆形的形状（例如：矩形、圆形）。',
  })
  @IsString()
  @IsOptional()
  shape: string;
}

class ObstacleDto {
  // 矩形障碍物列表
  @ApiProperty({
    type: [RectDto],
    description: '矩形障碍物的配置。',
  })
  @ValidateNested({ each: true })
  @Type(() => RectDto)
  rectangle: RectDto[];

  // 圆形障碍物列表
  @ApiProperty({
    type: [CircleDto],
    description: '圆形障碍物的配置。',
  })
  @ValidateNested({ each: true })
  @Type(() => CircleDto)
  circle: CircleDto[];
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
    type: ObstacleDto,
    description: '地图的障碍物配置。',
  })
  @ValidateNested()
  @Type(() => ObstacleDto)
  @IsOptional()
  obstacles: {
    circle: CircleDto[];
    rectangle: RectDto[];
  };
}
