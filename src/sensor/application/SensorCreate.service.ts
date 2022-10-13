import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { SensorMikroOrm } from '../infrastructure/persistence/mikroOrm/model/SensorMikroOrm';
import { EntityRepository } from '@mikro-orm/core';
import { SensorCreateHttpDto } from '../infrastructure/model/SensorCreateHttpDto';
import { Sensor } from '../domain/model/Sensor';

@Injectable()
export class SensorCreateService {
  public constructor(
    @InjectRepository(SensorMikroOrm)
    private readonly sensorMikroOrmRepository: EntityRepository<SensorMikroOrm>,
  ) {}

  public async run(dto: SensorCreateHttpDto): Promise<Sensor> {
    const sensorMikroOrm: SensorMikroOrm = new SensorMikroOrm();

    sensorMikroOrm.name = dto.name;

    await this.sensorMikroOrmRepository.persistAndFlush(sensorMikroOrm);

    return sensorMikroOrm;
  }
}
