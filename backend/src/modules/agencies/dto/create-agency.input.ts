import { Field, InputType } from '@nestjs/graphql';
import { IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import { AgencyType } from '../enums';

@InputType()
export class CreateAgencyInput {
  @Field(() => String)
  @IsEnum(AgencyType, { message: 'Type entered incorrectly' })
  type: string;

  @Field(() => String)
  @IsNotEmpty()
  title: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  description?: string;
}
