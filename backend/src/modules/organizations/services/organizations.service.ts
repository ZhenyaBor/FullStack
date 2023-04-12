import { Injectable } from '@nestjs/common';
import { CreateOrganizationInput } from '../dto/create-organization.input';
import { UpdateOrganizationInput } from '../dto/update-organization.input';
import { InjectRepository } from '@nestjs/typeorm';
import { OrganizationEntity } from '../entities/organization.entity';
import { Repository } from 'typeorm';
import { PaginationOrganizationInput } from '../dto/pagination.input';

@Injectable()
export class OrganizationsService {
  constructor(
    @InjectRepository(OrganizationEntity)
    private readonly organizationRepository: Repository<OrganizationEntity>,
  ) {}

  async createOrganization(
    createOrganizationInput: CreateOrganizationInput,
  ): Promise<OrganizationEntity> {
    const organization = this.organizationRepository.create(
      createOrganizationInput,
    );
    return await this.organizationRepository.save(organization);
  }

  async getAllOrganization(
    pagination: PaginationOrganizationInput,
  ): Promise<{ totalCount: number; organizations: OrganizationEntity[] }> {
    const { pageSize, pageNumber } = pagination;

    const options = { skip: (pageNumber - 1) * pageSize, take: pageSize };

    const totalCount = await this.getOrganizationCount();
    const organizations = await this.organizationRepository.find(options);

    return { totalCount, organizations };
  }

  async deleteOrganization(id: number): Promise<number> {
    await this.organizationRepository.delete({ id });
    return id;
  }

  async updateOrganization(
    updateOrganizationInput: UpdateOrganizationInput,
  ): Promise<OrganizationEntity> {
    const organization = await this.organizationRepository.findOne({
      where: { id: updateOrganizationInput.id },
    });
    organization.status = updateOrganizationInput.status;
    organization.title = updateOrganizationInput.title;
    organization.description = updateOrganizationInput.description;
    organization.image = updateOrganizationInput.image;
    organization.url = updateOrganizationInput.url;

    return this.organizationRepository.save(organization);
  }

  async getOrganizationCount(): Promise<number> {
    return await this.organizationRepository.count();
  }
}
