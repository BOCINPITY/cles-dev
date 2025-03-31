import { Injectable } from '@nestjs/common';
import { CreateQtMapDto } from './dto/create-qtmap.dto';
import { UpdateQtmapDto } from './dto/update-qtmap.dto';
import { QTMap } from './schema/qtmap.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class QtmapService {
  constructor(@InjectModel(QTMap.name) private mapModel: Model<QTMap>) {}
  async create(createQtmapDto: CreateQtMapDto) {
    try {
      const createdMap = new this.mapModel(createQtmapDto);
      const savedMap = await createdMap.save();
      return savedMap;
    } catch (error) {
      console.error('Error creating map:', error);
      throw new Error('Failed to create map');
    }
  }

  async findAll() {
    //编写查询逻辑
    const maps = await this.mapModel.find();
    if (!maps || maps.length === 0) {
      return {
        message: 'No maps found',
        data: [],
      };
    }
    return maps;
  }

  async findOne(id: string) {
    //编写查询逻辑
    const map = await this.mapModel.findById(id);
    if (!map) {
      return {
        message: `Map with id ${id} not found`,
      };
    }
    return map;
  }

  async update(id: string, updateQtmapDto: UpdateQtmapDto) {
    //编写更新逻辑
    const updatedMap = await this.mapModel.findByIdAndUpdate(
      id,
      updateQtmapDto,
      { new: true },
    );
    if (!updatedMap) {
      return {
        message: `Map with id ${id} not found`,
      };
    }
    return updatedMap;
  }

  remove(id: string) {
    //编写删除逻辑
    const deletedMap = this.mapModel.findByIdAndDelete(id);
    return {
      message: `Map with id ${id} deleted successfully`,
      deletedMap,
    };
  }
}
