import { EntitySchema } from 'typeorm';
import { User, UserAvailability } from '../../../core/entities/user';

export const UserEntity = new EntitySchema<User>({
  name: 'user',
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
    email: {
      type: String,
    },
    availability: {
      type: 'enum',
      enum: UserAvailability,
    },
  },
});
