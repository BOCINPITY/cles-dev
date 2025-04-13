import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class QTMap extends Document {
  @Prop({ required: true })
  width: number;

  @Prop({ required: true })
  height: number;

  @Prop({
    type: [
      {
        shape: { type: String, required: true }, // 表示形状（circle 或 rectangle）
        x: { type: Number, required: true },
        y: { type: Number, required: true },
        radius: { type: Number, required: false },
        width: { type: Number, required: false },
        height: { type: Number, required: false },
        fill: { type: String, required: true },
        stroke: { type: String, required: true },
        strokeWidth: { type: Number, required: true },
      },
    ],
    required: true,
  })
  obstacles: Array<{
    shape: 'circle' | 'rectangle';
    x: number;
    y: number;
    radius?: number;
    width?: number;
    height?: number;
    fill: string;
    stroke: string;
    strokeWidth: number;
  }>;
}

export const QTMapSchema = SchemaFactory.createForClass(QTMap);
