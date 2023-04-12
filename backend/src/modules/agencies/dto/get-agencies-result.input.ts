import { Field, Int, ObjectType } from '@nestjs/graphql';
import { AgencyEntity } from '../entities/agencies.entity';

@ObjectType()
export class GetAgenciesResult {
  @Field(() => [AgencyEntity])
  agencies: AgencyEntity[];

  @Field(() => Int)
  totalCount: number;
}
