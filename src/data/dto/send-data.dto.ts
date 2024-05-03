import { IsNotEmpty, IsString } from 'class-validator';

export class SendDataDto {
  @IsNotEmpty()
  @IsString()
  readonly userId: string;
  @IsNotEmpty()
  @IsString()
  readonly toolId: string;
  @IsNotEmpty()
  readonly temperature: number;
  @IsNotEmpty()
  readonly humidity: number;
  @IsNotEmpty()
  readonly fanStatus: boolean;
  @IsNotEmpty()
  readonly heaterStatus: boolean;
  @IsNotEmpty()
  @IsString()
  readonly addedTime: string;
}
