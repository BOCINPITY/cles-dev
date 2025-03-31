import { Controller, Get, Post, Patch, Delete, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';
import { PathService } from './path.service';

@ApiTags('Path') // Group the endpoints under the "Path" tag in Swagger
@Controller('path')
export class PathController {
  constructor(private readonly pathService: PathService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new path', description: '开发中' })
  create() {
    return this.pathService.create();
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all paths', description: '开发中' })
  findAll() {
    return this.pathService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Retrieve a specific path by ID',
    description: '开发中',
  })
  @ApiParam({ name: 'id', description: 'The ID of the path to retrieve' })
  findOne(@Param('id') id: string) {
    return this.pathService.findOne(id);
  }

  @Patch()
  @ApiOperation({ summary: 'Update an existing path', description: '开发中' })
  update() {
    return this.pathService.update();
  }

  @Delete()
  @ApiOperation({ summary: 'Remove a path', description: '开发中' })
  remove() {
    return this.pathService.remove();
  }
}
