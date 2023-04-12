import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateUserInput } from '../../inputs/update-user.input';
import { CreateUserInput } from '../../inputs/create-user.input';
import { UserEntity } from '../../entities/user.entity';
import { ProfileEntity } from '../../entities/profile.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,

    @InjectRepository(ProfileEntity)
    private readonly profileRepository: Repository<ProfileEntity>,
  ) {}

  async createUser(createUserInput: CreateUserInput): Promise<UserEntity> {
    const user = this.userRepository.create(createUserInput);

    if (createUserInput.profile) {
      const profile = this.profileRepository.create(createUserInput.profile);
      user.profile = profile;
    }

    return await this.userRepository.save(user);
  }

  async getUserByRole(roles: string[]): Promise<UserEntity[]> {
    return await this.userRepository.find({
      where: { roles: String(roles) },
    });
  }

  async getOneUser(id: number): Promise<UserEntity> {
    return await this.userRepository.findOne({
      where: { id },
    });
  }

  async getAllUser(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  async removeUser(id: number): Promise<number> {
    await this.userRepository.delete({ id });
    return id;
  }

  async updateUser(updateUserInput: UpdateUserInput): Promise<UserEntity> {
    const user = await this.userRepository.findOne({
      where: { id: updateUserInput.id },
    });
    user.email = updateUserInput.email;
    user.userName = updateUserInput.userName;
    user.roles = updateUserInput.roles;
    user.profile.firstName = updateUserInput.profile.firstName;
    user.profile.lastName = updateUserInput.profile.lastName;
    return await this.userRepository.save(user);
  }
}
