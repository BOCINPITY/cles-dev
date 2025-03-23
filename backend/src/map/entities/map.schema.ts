// src/map/entities/map.entity.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true, collection: 'map' })
export class Map extends Document {
  @Prop({ required: true })
  width: number;

  @Prop({ required: true })
  height: number;

  @Prop({
    type: [
      {
        coordinates: { type: [Number], required: true },
      },
    ],
    required: true,
  })
  obstacles: Array<{ coordinates: [number, number] }>;

  @Prop({ type: [Number], required: false })
  startPoint?: [number, number];

  @Prop({ type: [Number], required: false })
  endPoint?: [number, number];
  @Prop({ description: '创建时间' })
  createdAt: Date;

  @Prop({ description: '更新时间' })
  updatedAt: Date;
}

export const MapSchema = SchemaFactory.createForClass(Map);
