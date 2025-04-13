import { ApiProperty } from '@nestjs/swagger';

export class BaseResponseDto<T> {
  @ApiProperty({ description: '响应码' })
  code?: number;

  @ApiProperty({ description: '响应数据', required: false })
  data?: T;

  @ApiProperty({ description: '响应消息' })
  message: string;
}
