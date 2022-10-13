import { Module } from '@nestjs/common';
import { SensorController } from './infrastructure/http/Sensor.controller';
import { SensorCreateService } from './application/SensorCreate.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { SensorMikroOrm } from './infrastructure/persistence/mikroOrm/model/SensorMikroOrm';

@Module({
  controllers: [SensorController],
  providers: [SensorCreateService],
  imports: [MikroOrmModule.forFeature([SensorMikroOrm])],
})
export class SensorModule {}
