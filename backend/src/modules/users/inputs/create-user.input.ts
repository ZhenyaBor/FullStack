import { Field, InputType } from '@nestjs/graphql';
import { CreateUserProfileInput } from './create-profile.input';

@InputType()
export class CreateUserInput {
  @Field()
  email: string;

  @Field()
  userName: string;

  @Field(() => [String])
  roles: string[];

  @Field(() => CreateUserProfileInput)
  profile?: CreateUserProfileInput;
}
