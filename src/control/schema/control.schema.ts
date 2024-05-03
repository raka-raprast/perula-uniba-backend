import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ControlDocument = HydratedDocument<Control>;

@Schema({ timestamps: true })
export class Control {
  @Prop()
  userId: string;

  @Prop()
  toolId: string;

  @Prop()
  fanStatus: boolean;

  @Prop()
  heaterStatus: boolean;
}

export const ControlSchema = SchemaFactory.createForClass(Control);
