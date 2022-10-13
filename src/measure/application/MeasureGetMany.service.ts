import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { MeasureMikroOrm } from '../infrastructure/persistence/mikroOrm/MeasureMikroOrm';
import { EntityRepository, ObjectQuery } from '@mikro-orm/core';
import { Measure } from '../domain/model/Measure';
import { MeasureGetManyHttpDto } from '../infrastructure/model/MeasureGetManyHttpDto';

@Injectable()
export class MeasureGetManyService {
  public constructor(
    @InjectRepository(MeasureMikroOrm)
    private readonly measureMikroOrmRepository: EntityRepository<MeasureMikroOrm>,
  ) {}

  public async run(dto: MeasureGetManyHttpDto): Promise<Measure[]> {
    const query: ObjectQuery<MeasureMikroOrm> = {};

    if (dto.sensorId) {
      query.sensor = dto.sensorId;
    }

    const measuresMikroOrm: MeasureMikroOrm[] = await this.measureMikroOrmRepository.find(query);

    return measuresMikroOrm.map((measureMikroOrm) => {
      return {
        id: measureMikroOrm.id,
        value: measureMikroOrm.value,
        sensorId: measureMikroOrm.sensor.id,
      };
    });
  }
}
