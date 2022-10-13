import { Migration } from '@mikro-orm/migrations';

export class Migration20221006162101 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "sensor" ("id" uuid not null, "name" varchar(255) not null, constraint "sensor_pkey" primary key ("id"));',
    );

    this.addSql(
      'create table "measure" ("id" uuid not null, "value" int not null, "sensor_id" uuid not null, constraint "measure_pkey" primary key ("id"));',
    );

    this.addSql(
      'alter table "measure" add constraint "measure_sensor_id_foreign" foreign key ("sensor_id") references "sensor" ("id") on update cascade;',
    );
  }

  async down(): Promise<void> {
    this.addSql('alter table "measure" drop constraint "measure_sensor_id_foreign";');

    this.addSql('drop table if exists "sensor" cascade;');

    this.addSql('drop table if exists "measure" cascade;');
  }
}
