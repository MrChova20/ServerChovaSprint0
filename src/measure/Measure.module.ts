import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { MeasureController } from './infrastructure/http/Measure.controller';
import { MeasureCreateService } from './application/MeasureCreate.service';
import { MeasureMikroOrm } from './infrastructure/persistence/mikroOrm/MeasureMikroOrm';
import { MeasureGetManyService } from './application/MeasureGetMany.service';

@Module({
  controllers: [MeasureController],
  providers: [MeasureCreateService, MeasureGetManyService],
  imports: [MikroOrmModule.forFeature([MeasureMikroOrm])],
})
export class MeasureModule {}
