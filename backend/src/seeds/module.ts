import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgencyEntity } from '../modules/agencies/entities/agencies.entity';
import { SeedsService } from './services/seeds.service';
import { AgencyService } from '../modules/agencies/services/agencies.service';
import { OrganizationEntity } from 'src/modules/organizations/entities/organization.entity';
import { OrganizationsService } from 'src/modules/organizations/services/organizations.service';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([AgencyEntity, OrganizationEntity]),
  ],
  providers: [SeedsService, AgencyService, OrganizationsService],
})
export class SeedsModule {}
