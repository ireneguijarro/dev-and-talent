import { AbstractRepository, EntityRepository } from 'typeorm';
import { UserEntity } from '../entity/User';
import { UserRepository as UserRepositoryAdapter } from '../../../core/repositories/user';
import { User } from '../../../core/entities/user';
import { getConnection } from 'typeorm';

@EntityRepository(UserEntity)
export class UserRepository extends AbstractRepository<User> implements UserRepositoryAdapter {
  async findAll(): Promise<User[]> {
    const repositoryORM = getConnection().getRepository<User>(UserEntity);
    const users = await repositoryORM.find();
    return users;
  }
}
