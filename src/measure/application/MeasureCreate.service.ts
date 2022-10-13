import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository, IdentifiedReference } from '@mikro-orm/core';
import { MeasureMikroOrm } from '../infrastructure/persistence/mikroOrm/MeasureMikroOrm';
import { Measure } from '../domain/model/Measure';
import { MeasureCreateHttpDto } from '../infrastructure/model/MeasureCreateHttpDto';
import { SensorMikroOrm } from '../../sensor/infrastructure/persistence/mikroOrm/model/SensorMikroOrm';

@Injectable()
export class MeasureCreateService {
  public constructor(
    @InjectRepository(MeasureMikroOrm)
    private readonly measureMikroOrmRepository: EntityRepository<MeasureMikroOrm>,
  ) {}

  public async run(dto: MeasureCreateHttpDto): Promise<Measure> {
    const measureMikroOrm: MeasureMikroOrm = new MeasureMikroOrm();

    measureMikroOrm.value = dto.value;

    measureMikroOrm.sensor = {
      id: dto.sensorId,
    } as IdentifiedReference<SensorMikroOrm>;

    await this.measureMikroOrmRepository.persistAndFlush(measureMikroOrm);

    return {
      id: measureMikroOrm.id,
      value: measureMikroOrm.value,
      sensorId: measureMikroOrm.sensor.id,
    };
  }
}
