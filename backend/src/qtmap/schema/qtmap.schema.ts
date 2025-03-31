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
        x: Number,
        y: Number,
        width: Number,
        height: Number,
        shape: String,
        color: String,
        scale: Number,
        rotate: Number,
      },
    ],
    required: true,
  })
  obstacles: Array<{
    x: number;
    y: number;
    width: number;
    height: number;
    shape?: string;
    color?: string;
    scale?: number;
    rotate?: number;
  }>;
}

export const QTMapSchema = SchemaFactory.createForClass(QTMap);
