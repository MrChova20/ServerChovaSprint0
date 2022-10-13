import { IsNotEmpty, IsString } from 'class-validator';

export class SensorCreateHttpDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
