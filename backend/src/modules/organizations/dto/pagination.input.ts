import { Field, InputType } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, Min } from 'class-validator';

@InputType()
export class PaginationOrganizationInput {
  @Field(() => Number)
  @IsNotEmpty()
  @IsInt()
  @Min(1)
  pageSize: number;

  @Field(() => Number)
  @IsNotEmpty()
  @IsInt()
  @Min(1)
  pageNumber: number;
}
