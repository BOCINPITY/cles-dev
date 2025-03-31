import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBody, ApiResponse } from '@nestjs/swagger';
import { QtmapService } from './qtmap.service';
import { CreateQtMapDto } from './dto/create-qtmap.dto';
import { UpdateQtmapDto } from './dto/update-qtmap.dto';

@ApiTags('Qtmap') // 为整个控制器添加标签
@Controller('qtmap')
export class QtmapController {
  constructor(private readonly qtmapService: QtmapService) {}

  @Post()
  @ApiOperation({
    summary: '创建新地图',
    description: '使用提供的数据创建一张新地图。',
  })
  @ApiBody({
    type: CreateQtMapDto,
    description: '创建新地图所需的数据。',
  })
  @ApiResponse({
    status: 201,
    description: '地图已成功创建。',
  })
  @ApiResponse({ status: 400, description: '输入数据无效。' })
  create(@Body() createQtmapDto: CreateQtMapDto) {
    return this.qtmapService.create(createQtmapDto);
  }

  @Get()
  @ApiOperation({
    summary: '获取所有地图',
    description: '检索所有地图的列表。',
  })
  @ApiResponse({ status: 200, description: '地图列表。' })
  findAll() {
    return this.qtmapService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: '通过ID获取地图',
    description: '根据ID检索特定地图。',
  })
  @ApiResponse({ status: 200, description: '具有指定ID的地图。' })
  @ApiResponse({ status: 404, description: '地图未找到。' })
  findOne(@Param('id') id: string) {
    return this.qtmapService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: '更新地图',
    description: '根据ID更新特定地图的详细信息。',
  })
  @ApiBody({ type: UpdateQtmapDto, description: '更新地图所需的数据。' })
  @ApiResponse({
    status: 200,
    description: '地图已成功更新。',
  })
  @ApiResponse({ status: 404, description: '地图未找到。' })
  update(@Param('id') id: string, @Body() updateQtmapDto: UpdateQtmapDto) {
    return this.qtmapService.update(id, updateQtmapDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: '删除地图',
    description: '根据ID删除特定地图。',
  })
  @ApiResponse({
    status: 200,
    description: '地图已成功删除。',
  })
  @ApiResponse({ status: 404, description: '地图未找到。' })
  remove(@Param('id') id: string) {
    return this.qtmapService.remove(id);
  }
}
