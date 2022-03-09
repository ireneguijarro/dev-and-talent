import { PartialUser, User } from '../entities/user';

export interface UserRepository {
  findAll(): Promise<User[]>;
  findOne(id: string): Promise<User>;
  create(user: PartialUser): Promise<User | undefined>;
  update(id: string, user: PartialUser): Promise<User>;
  remove(id: string): Promise<void>;
}
