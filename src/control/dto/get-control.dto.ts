import { IsNotEmpty, IsString } from 'class-validator';

export class GetControlDto {
  @IsNotEmpty()
  @IsString()
  readonly userId: string;
  @IsNotEmpty()
  @IsString()
  readonly toolId: string;
}
