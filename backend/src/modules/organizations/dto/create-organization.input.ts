import { InputType, Field } from '@nestjs/graphql';
import { IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import { OrganizationStatus } from '../enums';

@InputType()
export class CreateOrganizationInput {
  @Field(() => String)
  @IsEnum(OrganizationStatus, { message: 'Type entered incorrectly' })
  status: string;

  @Field(() => String)
  @IsNotEmpty()
  title: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  description?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  image?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  url?: string;
}
