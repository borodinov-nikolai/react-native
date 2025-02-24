import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SeriesService } from './series.service';
import { Series } from './entities/series.entity';
import { CreateSeriesInput } from './dto/create-series.input';
import { UpdateSeriesInput } from './dto/update-series.input';
import { GetSeriesArgs } from './dto/get-series.args';
import { SeriesResponse } from './dto/series.response';
import { UseGuards } from '@nestjs/common';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles.decorator';

@Resolver(() => Series)
export class SeriesResolver {
  constructor(private readonly seriesService: SeriesService) { }

  @UseGuards(RolesGuard)
  @Roles(["SUPER_ADMIN", "ADMIN"])
  @Mutation(() => Series)
  createSeries(@Args('createSeriesInput') createSeriesInput: CreateSeriesInput) {
    return this.seriesService.create(createSeriesInput);
  }

  @Query(() => SeriesResponse)
  findAllSeries(@Args('args', { type: () => GetSeriesArgs, nullable: true }) args?: GetSeriesArgs) {
    return this.seriesService.findAll(args);
  }

  @Query(() => Series)
  findOneSeries(@Args('id', { type: () => Int }) id: number) {
    return this.seriesService.findOne(id);
  }

  @UseGuards(RolesGuard)
  @Roles(["SUPER_ADMIN", "ADMIN"])
  @Mutation(() => Series)
  updateSeries(@Args('updateSeriesInput') updateSeriesInput: UpdateSeriesInput) {
    return this.seriesService.update(updateSeriesInput.id, updateSeriesInput);
  }

  @UseGuards(RolesGuard)
  @Roles(["SUPER_ADMIN", "ADMIN"])
  @Mutation(() => Series)
  removeSeries(@Args('id', { type: () => Int }) id: number) {
    return this.seriesService.remove(id);
  }
}
