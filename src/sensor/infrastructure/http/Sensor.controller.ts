import { Body, Controller, Get, Post } from '@nestjs/common';
import { Sensor } from '../../domain/model/Sensor';
import { SensorCreateHttpDto } from '../model/SensorCreateHttpDto';
import { SensorCreateService } from '../../application/SensorCreate.service';

@Controller('/sensors')
export class SensorController {
  public constructor(private readonly sensorCreateService: SensorCreateService) {}

  @Get()
  public async getSensors(): Promise<Sensor[]> {
    return [];
  }

  @Post()
  public async createSensor(@Body() body: SensorCreateHttpDto): Promise<Sensor> {
    const sensor: Sensor = await this.sensorCreateService.run(body);

    return sensor;
  }
}
