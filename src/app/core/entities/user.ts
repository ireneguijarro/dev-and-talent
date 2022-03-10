export type User = {
  id: string;
  name: string;
  availability: UserAvailability;
  email: string;
  country: string;
};

export enum UserAvailability {
  NOT_AVAILABLE = 'not-available',
  MORNINGS = 'mornings',
  AFTERNOON = 'afternoon',
  EVENINGS = 'evenings',
}

export type PartialUser = Omit<User, 'id'>;
