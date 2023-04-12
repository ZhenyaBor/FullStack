import { Module } from '@nestjs/common';
import { AgencyService } from './services/agencies.service';
import { AgencyResolver } from './resolvers/agencies.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgencyEntity } from './entities/agencies.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AgencyEntity])],
  providers: [AgencyResolver, AgencyService],
  exports: [AgencyService],
})
export class AgencyModule {}
