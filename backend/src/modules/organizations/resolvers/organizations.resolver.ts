import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OrganizationsService } from '../services/organizations.service';
import { OrganizationEntity } from '../entities/organization.entity';
import { CreateOrganizationInput } from '../dto/create-organization.input';
import { UpdateOrganizationInput } from '../dto/update-organization.input';
import { PaginationOrganizationInput } from '../dto/pagination.input';
import { GetOrganizationsResult } from '../dto/get-organizations-result.input';

@Resolver(() => OrganizationEntity)
export class OrganizationsResolver {
  constructor(private readonly organizationsService: OrganizationsService) {}

  @Mutation(() => OrganizationEntity)
  createOrganization(
    @Args('createOrganizationInput')
    createOrganizationInput: CreateOrganizationInput,
  ) {
    return this.organizationsService.createOrganization(
      createOrganizationInput,
    );
  }

  @Query(() => GetOrganizationsResult)
  async getAllOrganization(
    @Args('pagination') pagination: PaginationOrganizationInput,
  ): Promise<{ totalCount: number; organizations: OrganizationEntity[] }> {
    return await this.organizationsService.getAllOrganization(pagination);
  }

  @Mutation(() => Number)
  async deleteOrganization(@Args('id') id: number): Promise<number> {
    return this.organizationsService.deleteOrganization(id);
  }

  @Mutation(() => OrganizationEntity)
  async updateOrganization(
    @Args('updateOrganizationInput')
    updateOrganizationInput: UpdateOrganizationInput,
  ): Promise<OrganizationEntity> {
    return await this.organizationsService.updateOrganization(
      updateOrganizationInput,
    );
  }
}
