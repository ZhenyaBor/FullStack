import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './user.entity';

@ObjectType()
@Entity('profiles')
export class ProfileEntity {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Field()
  @Column()
  firstName: string;

  @Field()
  @Column()
  lastName: string;

  @OneToOne(() => UserEntity, (user) => user.profile)
  user: UserEntity;
}
