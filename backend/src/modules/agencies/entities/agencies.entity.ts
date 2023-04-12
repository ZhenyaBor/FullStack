import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
} from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { AgencyType } from '../enums';
import { OrganizationEntity } from 'src/modules/organizations/entities/organization.entity';

@ObjectType()
@Entity('agency_entity')
export class AgencyEntity {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column({
    type: 'enum',
    enum: AgencyType,
    default: AgencyType.SYSTEM,
  })
  @Field(() => String)
  type: string;

  @Column('varchar')
  @Field(() => String)
  title: string;

  @Column({ type: 'text', nullable: true })
  @Field(() => String, { nullable: true })
  description: string;

  @CreateDateColumn({ name: 'create_date' })
  createDate: Date;

  @UpdateDateColumn({ name: 'edit_date' })
  editDate: Date;

  @ManyToMany(() => OrganizationEntity, (organization) => organization.agencies)
  organizations: OrganizationEntity[];
}
