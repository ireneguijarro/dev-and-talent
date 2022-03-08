export type User = {
  id: string;
  name: string;
  availability: string;
  email: string;
  country: string;
};

export type PartialUser = Omit<User, 'id'>;
