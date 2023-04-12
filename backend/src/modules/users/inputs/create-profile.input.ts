import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserProfileInput {
  @Field()
  firstName: string;

  @Field()
  lastName: string;
}
