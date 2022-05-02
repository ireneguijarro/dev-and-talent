export type Client = {
  id: string;
  name: string;
  country: string;
};

export type PartialClient = Omit<Client, 'id'>;
