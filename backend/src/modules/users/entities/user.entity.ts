import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ProfileEntity } from './profile.entity';

@Entity('users')
@ObjectType()
export class UserEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ type: 'varchar' })
  userName: string;

  @Field()
  @Column({ type: 'varchar' })
  email: string;

  @Field()
  @CreateDateColumn()
  dateCreate: Date;

  @Field()
  @UpdateDateColumn()
  dateUpdate: Date;

  @Column('simple-array')
  @Field(() => [String])
  roles: string[];

  @OneToOne(() => ProfileEntity, (profile) => profile.user, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({ name: 'profileId' })
  @Field(() => ProfileEntity)
  profile: ProfileEntity;
}
