import { IsOptional, IsUUID } from 'class-validator';

export class MeasureGetManyHttpDto {
  @IsOptional()
  @IsUUID()
  sensorId: string;
}
