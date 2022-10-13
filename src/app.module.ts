import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module, OnModuleInit } from '@nestjs/common';
import { mikroOrmFactory } from './_shared/infrastructure/persistence/MikroOrmFactory';
import { MikroORM } from '@mikro-orm/core';
import { SensorModule } from './sensor/Sensor.module';
import { MeasureModule } from './measure/Measure.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    MikroOrmModule.forRootAsync({
      useFactory: () => {
        return mikroOrmFactory();
      },
    }),
    SensorModule,
    MeasureModule,
  ],
})
export class AppModule implements OnModuleInit {
  public constructor(private readonly mikroOrm: MikroORM) {}

  public async onModuleInit() {
    await this.mikroOrm.getMigrator().up();
  }
}
