import { Field, Int, ObjectType } from '@nestjs/graphql';
import { OrganizationEntity } from '../entities/organization.entity';

@ObjectType()
export class GetOrganizationsResult {
  @Field(() => [OrganizationEntity])
  organizations: OrganizationEntity[];

  @Field(() => Int)
  totalCount: number;
}
