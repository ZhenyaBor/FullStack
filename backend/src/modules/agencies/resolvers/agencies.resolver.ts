import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AgencyService } from '../services/agencies.service';
import { AgencyEntity } from '../entities/agencies.entity';
import { CreateAgencyInput } from '../dto/create-agency.input';
import { Input } from '../dto/options.input';
import { UpdateAgencyInput } from '../dto/update-agency.input';
import { GetAgenciesResult } from '../dto/get-agencies-result.input';

@Resolver(() => AgencyEntity)
export class AgencyResolver {
  constructor(private readonly agencyService: AgencyService) {}

  @Mutation(() => AgencyEntity)
  async createAgency(
    @Args('createAgencyInput') createAgencyInput: CreateAgencyInput,
  ): Promise<AgencyEntity> {
    return await this.agencyService.createAgency(createAgencyInput);
  }

  @Query(() => GetAgenciesResult)
  async getAllAgencies(
    @Args('input') input: Input,
  ): Promise<{ totalCount: number; agencies: AgencyEntity[] }> {
    return this.agencyService.getAllAgency(input);
  }

  @Mutation(() => Int)
  async deleteAgency(@Args('id') id: number): Promise<number> {
    return this.agencyService.deleteAgency(id);
  }

  @Mutation(() => AgencyEntity)
  async updateAgency(
    @Args('updateAgencyInput') updateAgencyInput: UpdateAgencyInput,
  ): Promise<AgencyEntity> {
    return await this.agencyService.updateAgency(updateAgencyInput);
  }
}
