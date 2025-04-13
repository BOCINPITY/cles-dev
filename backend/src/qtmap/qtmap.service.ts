import { Injectable } from '@nestjs/common';
import { CreateQtMapDto } from './dto/create-qtmap.dto';
import { UpdateQtmapDto } from './dto/update-qtmap.dto';
import { QTMap } from './schema/qtmap.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

/**
 * QtmapService 提供对地图数据的增删改查操作。
 * @author cles
 * @date 2023-10-01
 * @description 该服务使用 Mongoose 模型与 MongoDB 数据库进行交互。
 * @version 1.0
 * @class QtmapService
 * @classdesc QtmapService 提供地图数据的 CRUD 操作。
 */
@Injectable()
export class QtmapService {
  /**
   * 构造函数，注入地图模型。
   * @param mapModel 注入的地图模型
   */
  constructor(@InjectModel(QTMap.name) private mapModel: Model<QTMap>) {}

  /**
   * 创建新的地图数据。
   * @param createQtmapDto 包含地图宽度、高度和障碍物信息的数据传输对象
   * @returns 创建成功的地图数据和消息
   */
  async create(createQtmapDto: CreateQtMapDto) {
    const insertData = {
      width: createQtmapDto.width,
      height: createQtmapDto.height,
      obstacles: [
        ...createQtmapDto.obstacles.circle,
        ...createQtmapDto.obstacles.rectangle,
      ],
    };
    const map = new this.mapModel(insertData);
    const savedMap = await map.save();
    const data = savedMap.toObject();
    return {
      message: 'Map created successfully',
      data: {
        id: data._id,
        width: data.width,
        height: data.height,
        obstacles: data.obstacles,
      },
      success: true,
      code: 200,
    };
  }

  /**
   * 获取所有地图数据。
   * @returns 所有地图数据和消息
   */
  async findAll() {
    const maps = await this.mapModel.find().select('id width height');
    return {
      message: 'Maps retrieved successfully',
      data: maps,
      success: true,
      code: 200,
    };
  }

  /**
   * 根据ID获取单个地图数据。
   * @param id 地图的唯一标识符
   * @returns 对应的地图数据和消息
   */
  async findOne(id: string) {
    const map = await this.mapModel
      .findById(id)
      .select('-__v -createdAt -updatedAt');
    return {
      data: map,
      message: 'Map retrieved successfully',
      success: true,
      code: 200,
    };
  }

  /**
   * 更新指定ID的地图数据。
   * @param id 地图的唯一标识符
   * @param updateQtmapDto 包含更新信息的数据传输对象
   * @returns 更新后的地图数据和消息
   */
  async update(id: string, updateQtmapDto: UpdateQtmapDto) {
    const updatedData = {
      ...updateQtmapDto,
      obstacles: [
        ...(updateQtmapDto.obstacles?.circle || []),
        ...(updateQtmapDto.obstacles?.rectangle || []),
      ],
    };
    const updatedMap = await this.mapModel
      .findByIdAndUpdate(id, updatedData, { new: true })
      .select('-__v -createdAt');
    return {
      data: updatedMap,
      message: 'Map updated successfully',
      success: true,
      code: 200,
    };
  }

  /**
   * 删除指定ID的地图数据。
   * @param id 地图的唯一标识符
   * @returns 删除的地图数据和消息
   */
  async remove(id: string) {
    const deletedMap = await this.mapModel.findByIdAndDelete(id).select('-__v');
    return {
      message: `Map with id ${id} deleted successfully`,
      data: deletedMap,
      success: true,
      code: 200,
    };
  }
}
