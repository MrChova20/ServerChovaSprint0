import { SensorMikroOrm } from '../../../sensor/infrastructure/persistence/mikroOrm/model/SensorMikroOrm';
import { MeasureMikroOrm } from '../../../measure/infrastructure/persistence/mikroOrm/MeasureMikroOrm';
import * as dotenv from 'dotenv';

dotenv.config();

const { POSTGRES_PORT, POSTGRES_DATABASE, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_HOST } = process.env;

export default {
  host: POSTGRES_HOST,
  port: parseInt(POSTGRES_PORT),
  user: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  dbName: POSTGRES_DATABASE,
  migrations: {
    path: 'dist/common/infrastructure/mikroOrm/migrations',
    pathTs: 'src/common/infrastructure/mikroOrm/migrations',
  },
  entities: [SensorMikroOrm, MeasureMikroOrm],
  forceUndefined: true,
  type: 'postgresql',
};
