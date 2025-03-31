import { PartialType } from '@nestjs/swagger';
import { CreatePathDto } from './create-path.dto';

export class UpdatePathDto extends PartialType(CreatePathDto) {}
