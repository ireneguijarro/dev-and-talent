import { EntitySchema } from 'typeorm';
import { Client } from '../../../core/entities/client';

export const ClientEntity = new EntitySchema<Client>({
  name: 'client',
  columns: {
    id: {
      type: 'uuid',
      primary: true,
      generated: 'uuid',
    },
    name: {
      type: String,
    },
    country: {
      type: String,
    },
  },
});
