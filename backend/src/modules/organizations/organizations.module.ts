import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrganizationsService } from './services/organizations.service';
import { OrganizationsResolver } from './resolvers/organizations.resolver';
import { OrganizationEntity } from './entities/organization.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrganizationEntity])],
  providers: [OrganizationsResolver, OrganizationsService],
  exports: [OrganizationsService],
})
export class OrganizationsModule {}
