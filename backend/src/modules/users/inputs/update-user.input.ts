import { Field, InputType, ID } from '@nestjs/graphql';
import { CreateUserProfileInput } from './create-profile.input';

@InputType()
export class UpdateUserInput {
  @Field(() => ID)
  id: number;

  @Field()
  email: string;

  @Field()
  userName: string;

  @Field(() => [String])
  roles: string[];

  @Field(() => CreateUserProfileInput)
  profile?: CreateUserProfileInput;
}
