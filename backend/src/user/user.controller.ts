import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './schema/user.schema';
import { ApiTags, ApiOperation, ApiBody } from '@nestjs/swagger';
@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new user' })
  @ApiBody({ type: User }) // 解析请求体
  create(@Body() createUserDto: User) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all users' })
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param() id: number): string {
    console.log(id);
    return `This action returns a #${id} cat`;
  }
}
