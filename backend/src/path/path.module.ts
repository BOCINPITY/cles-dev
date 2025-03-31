import { Module } from '@nestjs/common';
import { PathService } from './path.service';
import { PathController } from './path.controller';

@Module({
  controllers: [PathController],
  providers: [PathService],
})
export class PathModule {}
