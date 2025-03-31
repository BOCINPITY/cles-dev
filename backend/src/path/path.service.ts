import { Injectable } from '@nestjs/common';

@Injectable()
export class PathService {
  create() {
    return 'This action adds a new path';
  }

  findAll() {
    return `This action returns all path`;
  }

  findOne(id: string) {
    return `This action returns a #${id} path`;
  }

  update() {
    return `This action updates a # path`;
  }

  remove() {
    return `This action removes a # path`;
  }
}
