import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateControlDto {
  @IsNotEmpty()
  @IsString()
  readonly userId: string;
  @IsNotEmpty()
  @IsString()
  readonly toolId: string;
  @IsNotEmpty()
  readonly fanStatus: boolean;
  @IsNotEmpty()
  readonly heaterStatus: boolean;
}
