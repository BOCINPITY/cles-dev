import { PartialType } from '@nestjs/swagger';
import { CreateQtMapDto } from './create-qtmap.dto';

export class UpdateQtmapDto extends PartialType(CreateQtMapDto) {}
