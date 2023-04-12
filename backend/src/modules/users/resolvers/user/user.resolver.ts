import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from '../../services/user/user.service';
import { UpdateUserInput } from '../../inputs/update-user.input';
import { CreateUserInput } from '../../inputs/create-user.input';
import { UserEntity } from '../../entities/user.entity';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => UserEntity)
  async createUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ): Promise<UserEntity> {
    return await this.userService.createUser(createUserInput);
  }

  @Mutation(() => UserEntity)
  async updateUser(
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
  ): Promise<UserEntity> {
    return await this.userService.updateUser(updateUserInput);
  }

  @Mutation(() => Number)
  async removeUser(@Args('id') id: number): Promise<number> {
    return await this.userService.removeUser(id);
  }

  @Query(() => [UserEntity])
  async getUserByRole(
    @Args('roles', { type: () => [String] }) roles: string[],
  ): Promise<UserEntity[]> {
    return await this.userService.getUserByRole(roles);
  }

  @Query(() => UserEntity)
  async getOneUser(@Args('id') id: number): Promise<UserEntity> {
    return await this.userService.getOneUser(id);
  }

  @Query(() => [UserEntity])
  async getAllUser(): Promise<UserEntity[]> {
    return await this.userService.getAllUser();
  }
}
