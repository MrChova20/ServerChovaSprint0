import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { Measure } from '../../domain/model/Measure';
import { MeasureCreateHttpDto } from '../model/MeasureCreateHttpDto';
import { MeasureCreateService } from '../../application/MeasureCreate.service';
import { MeasureGetManyService } from '../../application/MeasureGetMany.service';
import { MeasureGetManyHttpDto } from '../model/MeasureGetManyHttpDto';

@Controller('/measures')
export class MeasureController {
  public constructor(
    private readonly measureCreateService: MeasureCreateService,
    private readonly measureGetManyService: MeasureGetManyService,
  ) {}

  @Get()
  public async getMeasures(@Query() query: MeasureGetManyHttpDto): Promise<Measure[]> {
    return this.measureGetManyService.run(query);
  }

  @Post()
  public async createMeasures(@Body() body: MeasureCreateHttpDto): Promise<Measure> {
    const measure: Measure = await this.measureCreateService.run(body);

    return measure;
  }
}
