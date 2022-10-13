import { IsNotEmpty, IsNumber, IsUUID } from 'class-validator';

export class MeasureCreateHttpDto {
  @IsNumber()
  @IsNotEmpty()
  value: number;

  @IsUUID()
  sensorId: string;
}
