import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, IsNotEmpty, Min, IsInt } from 'class-validator';

@InputType()
class FilterInput {
  @Field(() => Number, { nullable: true })
  @IsOptional()
  id?: number;

  @Field(() => String, { nullable: true })
  @IsOptional()
  title?: string;

  @Field(() => [String], { nullable: true })
  @IsOptional()
  type?: string[];
}

@InputType()
class PaginationInput {
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

@InputType()
export class Input {
  @Field(() => FilterInput, { nullable: true })
  @IsOptional()
  filter?: FilterInput;

  @Field(() => PaginationInput)
  @IsNotEmpty()
  pagination: PaginationInput;
}
