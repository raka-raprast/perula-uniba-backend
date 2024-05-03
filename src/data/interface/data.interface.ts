import { Document } from 'mongoose';
export interface IData extends Document {
  readonly userId: string;
  readonly toolId: string;
  readonly temperature: number;
  readonly humidity: number;
  readonly fanStatus: boolean;
  readonly heaterStatus: boolean;
}
