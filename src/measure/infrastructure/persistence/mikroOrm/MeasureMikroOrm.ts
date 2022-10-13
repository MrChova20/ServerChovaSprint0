import { Entity, IdentifiedReference, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { randomUUID } from 'crypto';
import { SensorMikroOrm } from '../../../../sensor/infrastructure/persistence/mikroOrm/model/SensorMikroOrm';

@Entity({ tableName: 'measure' })
export class MeasureMikroOrm {
  @PrimaryKey({ name: 'id', type: 'uuid' })
  id: string = randomUUID();

  @Property({ name: 'value' })
  value: number;

  @ManyToOne(() => SensorMikroOrm, { name: 'sensor_id', wrappedReference: true })
  sensor: IdentifiedReference<SensorMikroOrm>;
}
