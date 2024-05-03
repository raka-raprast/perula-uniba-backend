import { Document } from 'mongoose';
export interface IControl extends Document {
  readonly userId: string;
  readonly toolId: string;
  readonly fanStatus: boolean;
  readonly heaterStatus: boolean;
}
