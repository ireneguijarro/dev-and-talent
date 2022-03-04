import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entity/User';
import { UserRepository as UserRepositoryAdapter } from '../../../core/repositories/user';
import { User as UserModel } from '../../../core/entities/user';
import { getConnection } from 'typeorm';

@EntityRepository(User)
export class UserRepository extends Repository<User> implements UserRepositoryAdapter {
  async findAll(): Promise<UserModel[]> {
    const repositoryORM = getConnection().getRepository(User);
    const users = await repositoryORM.find();
    return users;
  }
}
