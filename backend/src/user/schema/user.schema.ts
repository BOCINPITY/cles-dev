import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type UserDocument = User & Document;
//这里得注意一下，集合名字要和实际数据库定义的名字一致，否则无法获取到数据。
@Schema({ collection: 'User' })
export class User {
  @ApiProperty({ description: '名字' })
  @Prop({ required: true })
  name: string;
  @ApiProperty({ description: '电子邮件' })
  @Prop({ required: true })
  email: string;
  @ApiProperty({ description: '年龄' })
  @Prop()
  age: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
