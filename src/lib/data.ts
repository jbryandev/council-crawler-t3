import { faker } from '@faker-js/faker';

import { type Agency, type Agenda, type Highlight } from '@/lib/types';

faker.seed(123);
faker.setDefaultRefDate(new Date(2023, 5, 23));

export const agencies: Agency[] = [
  {
    id: 0,
    name: 'Edmond Public Works Committee',
    slug: 'edmond',
  },
  {
    id: 1,
    name: 'Oklahoma City Water Utilities Trust',
    slug: 'ocwut',
  },
  {
    id: 2,
    name: 'Stillwater Utilities Authority',
    slug: 'stillwater',
  },
  {
    id: 3,
    name: 'Norman Utilities Authority',
    slug: 'norman',
  },
  {
    id: 4,
    name: 'Broken Arrow Municipal Authority',
    slug: 'bama',
  },
  {
    id: 5,
    name: 'Tulsa Municipal Utilities Authority',
    slug: 'tmua',
  },
];

export const agendas: Agenda[] = [
  {
    id: 0,
    agencyId: 0,
    date: faker.date.recent({ days: 14 }),
    url: faker.internet.url(),
    content: faker.lorem.paragraphs(5),
  },
  {
    id: 1,
    agencyId: 1,
    date: faker.date.recent({ days: 14 }),
    url: faker.internet.url(),
    content: faker.lorem.paragraphs(5),
  },
  {
    id: 2,
    agencyId: 1,
    date: faker.date.recent({ days: 14 }),
    url: faker.internet.url(),
    content: faker.lorem.paragraphs(5),
  },
  {
    id: 3,
    agencyId: 0,
    date: faker.date.recent({ days: 14 }),
    url: faker.internet.url(),
    content: faker.lorem.paragraphs(5),
  },
  {
    id: 4,
    agencyId: 2,
    date: faker.date.recent({ days: 14 }),
    url: faker.internet.url(),
    content: faker.lorem.paragraphs(5),
  },
  {
    id: 5,
    agencyId: 3,
    date: faker.date.recent({ days: 14 }),
    url: faker.internet.url(),
    content: faker.lorem.paragraphs(5),
  },
  {
    id: 6,
    agencyId: 4,
    date: faker.date.recent({ days: 14 }),
    url: faker.internet.url(),
    content: faker.lorem.paragraphs(5),
  },
  {
    id: 7,
    agencyId: 5,
    date: faker.date.recent({ days: 14 }),
    url: faker.internet.url(),
    content: faker.lorem.paragraphs(5),
  },
];

export const highlights: Highlight[] = [
  {
    id: 0,
    agendaId: 0,
    content: faker.lorem.paragraphs(1),
  },
  {
    id: 1,
    agendaId: 0,
    content: faker.lorem.paragraphs(1),
  },
  {
    id: 2,
    agendaId: 0,
    content: faker.lorem.paragraphs(1),
  },
  {
    id: 3,
    agendaId: 1,
    content: faker.lorem.paragraphs(1),
  },
  {
    id: 4,
    agendaId: 1,
    content: faker.lorem.paragraphs(1),
  },
  {
    id: 5,
    agendaId: 2,
    content: faker.lorem.paragraphs(1),
  },
  {
    id: 6,
    agendaId: 2,
    content: faker.lorem.paragraphs(1),
  },
  {
    id: 7,
    agendaId: 3,
    content: faker.lorem.paragraphs(1),
  },
  {
    id: 8,
    agendaId: 3,
    content: faker.lorem.paragraphs(1),
  },
  {
    id: 9,
    agendaId: 4,
    content: faker.lorem.paragraphs(1),
  },
  {
    id: 10,
    agendaId: 5,
    content: faker.lorem.paragraphs(1),
  },
  {
    id: 11,
    agendaId: 6,
    content: faker.lorem.paragraphs(1),
  },
  {
    id: 12,
    agendaId: 7,
    content: faker.lorem.paragraphs(1),
  },
];
