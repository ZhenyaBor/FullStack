import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { OrganizationStatus } from '../enums';
import { AgencyEntity } from 'src/modules/agencies/entities/agencies.entity';

@ObjectType()
@Entity('organization')
export class OrganizationEntity {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column('varchar')
  @Field(() => String)
  title: string;

  @Column({ type: 'text', nullable: true })
  @Field(() => String, { nullable: true })
  description: string;

  @Column({
    type: 'enum',
    enum: OrganizationStatus,
    default: OrganizationStatus.ACTIVE,
  })
  @Field(() => String)
  status: string;

  @Column('varchar', { nullable: true })
  @Field(() => String, { nullable: true })
  image: string;

  @Column('varchar', { nullable: true })
  @Field(() => String, { nullable: true })
  url: string;

  @CreateDateColumn({ name: 'create_date' })
  createDate: Date;

  @UpdateDateColumn({ name: 'edit_date' })
  editDate: Date;

  @ManyToMany(() => AgencyEntity, (ent) => ent.organizations, { cascade: true })
  @JoinTable({
    name: 'agencies_organizations',
    joinColumn: {
      name: 'organization_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'ent_id',
      referencedColumnName: 'id',
    },
  })
  agencies: AgencyEntity[];
}
