import { IsNotEmpty, IsString } from 'class-validator';

export class GetDataDto {
  @IsNotEmpty()
  @IsString()
  readonly userId: string;
  @IsNotEmpty()
  readonly page: number;
}
