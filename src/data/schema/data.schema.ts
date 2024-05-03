import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DataDocument = HydratedDocument<Data>;

@Schema({ timestamps: true })
export class Data {
  @Prop()
  userId: string;

  @Prop()
  toolId: string;

  @Prop()
  temperature: number;

  @Prop()
  humidity: number;

  @Prop()
  fanStatus: boolean;

  @Prop()
  heaterStatus: boolean;

  @Prop()
  addedTime: string;
}

export const DataSchema = SchemaFactory.createForClass(Data);
