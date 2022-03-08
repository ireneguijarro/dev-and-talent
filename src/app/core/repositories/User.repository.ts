import { PartialUser, User } from '../entities/user';

export interface UserRepository {
  findAll(): Promise<User[]>;
  findOne(id: string): Promise<User | undefined>;
  create(user: PartialUser): Promise<User | undefined>;
  update(id: string, user: PartialUser): Promise<User | undefined>;
  delete(id: string): Promise<User>;
}
