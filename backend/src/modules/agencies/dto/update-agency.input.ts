import { CreateAgencyInput } from './create-agency.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import { AgencyType } from '../enums/AgencyType';

@InputType()
export class UpdateAgencyInput extends PartialType(CreateAgencyInput) {
  @Field(() => Int)
  @IsNotEmpty()
  id: number;

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
