import { Injectable } from '@nestjs/common';
import { CreateAgencyInput } from '../dto/create-agency.input';
import { AgencyEntity } from '../entities/agencies.entity';
import { Equal, FindManyOptions, In, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Input } from '../dto/options.input';
import { UpdateAgencyInput } from '../dto/update-agency.input';

@Injectable()
export class AgencyService {
  constructor(
    @InjectRepository(AgencyEntity)
    private readonly agencyRepository: Repository<AgencyEntity>,
  ) {}

  async createAgency(
    createAgencyInput: CreateAgencyInput,
  ): Promise<AgencyEntity> {
    const agency = this.agencyRepository.create(createAgencyInput);
    return await this.agencyRepository.save(agency);
  }

  async getAllAgency(
    input: Input,
  ): Promise<{ totalCount: number; agencies: AgencyEntity[] }> {
    const options: FindManyOptions<AgencyEntity> = {};

    if (input.filter) {
      const { id, title, type } = input.filter;

      options.where = {};

      if (id) {
        options.where.id = Equal(id);
      }

      if (title) {
        options.where.title = Equal(title);
      }

      if (type && type.length > 0) {
        options.where.type = In(type);
      }
    }

    if (input.pagination) {
      const { pageSize, pageNumber } = input.pagination;

      options.skip = (pageNumber - 1) * pageSize;
      options.take = pageSize;
    }

    const totalCount = await this.getAgenciesCount();
    const agencies = await this.agencyRepository.find(options);

    return { totalCount, agencies };
  }

  async deleteAgency(id: number): Promise<number> {
    await this.agencyRepository.delete({ id });
    return id;
  }

  async updateAgency(
    updateAgencyInput: UpdateAgencyInput,
  ): Promise<AgencyEntity> {
    const user = await this.agencyRepository.findOne({
      where: { id: updateAgencyInput.id },
    });
    user.type = updateAgencyInput.type;
    user.title = updateAgencyInput.title;
    user.description = updateAgencyInput.description;

    return await this.agencyRepository.save(user);
  }

  async getAgenciesCount(): Promise<number> {
    return await this.agencyRepository.count();
  }
}
