import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AgencyService } from '../../modules/agencies/services/agencies.service';
import { OrganizationsService } from '../../modules/organizations/services/organizations.service';
import { mockAgencies, mockOrganization } from '../mocks';
import { Input } from '../../modules/agencies/dto/options.input';
import { PaginationOrganizationInput } from '../../modules/organizations/dto/pagination.input';

@Injectable()
export class SeedsService {
  private readonly logger = new Logger();

  constructor(
    private configService: ConfigService,
    private agenciesService: AgencyService,
    private organizationsService: OrganizationsService,
  ) {
    if (this.configService.get<boolean>('isUseSeeds')) {
      this.logger.verbose('RUN SEEDS');

      (async () => {
        await this.seedAgencies();
        await this.seedOrganizations();
      })();
    }
  }

  async seedAgencies() {
    const isAgenciesLength = await this.agenciesService.getAgenciesCount();

    if (isAgenciesLength > 0) return;

    for (const agency of mockAgencies) {
      await this.agenciesService.createAgency(agency);
    }
  }

  async seedOrganizations() {
    const isOrganizationsLength =
      await this.organizationsService.getOrganizationCount();

    if (isOrganizationsLength > 0) return;

    for (const organization of mockOrganization) {
      await this.organizationsService.createOrganization(organization);
    }
  }
}
