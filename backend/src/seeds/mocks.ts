import { faker } from '@faker-js/faker';
import { AgencyType } from '../modules/agencies/enums';
import { OrganizationStatus } from '../modules/organizations/enums';

export const mockAgencies = new Array(50).fill(1).map(() => ({
  type: Object.values(AgencyType)[
    Math.floor(Math.random() * Object.values(AgencyType).length)
  ],
  title: faker.company.name(),
  description: faker.lorem.text(),
  create_date: new Date(),
  edit_date: new Date(),
}));

export const mockOrganization = new Array(50).fill(1).map(() => ({
  title: faker.company.name(),
  description: faker.lorem.text(),
  status:
    Object.values(OrganizationStatus)[
      Math.floor(Math.random() * Object.values(OrganizationStatus).length)
    ],
  image: faker.image.url(),
  url: faker.internet.url(),
  create_date: new Date(),
  edit_date: new Date(),
}));
