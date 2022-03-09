import { UserEntity } from '../entity/User';
import { PartialUser, User } from '../../../core/entities/user';
import { Connection } from 'typeorm';
import { UserRepository } from '../../../core/repositories/User.repository';

const userRepositoryImplementation = (connection: Connection): UserRepository => {
  const repositoryORM = connection.getRepository<User>(UserEntity);

  const findOne = async (id: string): Promise<User> => {
    const user = await repositoryORM.findOneOrFail(id);
    return user;
  };

  const findAll = async (): Promise<User[]> => {
    const users = await repositoryORM.find();
    return users;
  };

  const create = async (user: PartialUser): Promise<User> => {
    const createdUser = await repositoryORM.insert(user);
    const idUpdated = createdUser.generatedMaps[0].id;
    return await repositoryORM.findOneOrFail(idUpdated);
  };

  const update = async (id: string, user: PartialUser): Promise<User> => {
    await repositoryORM.update(id, user);
    return await repositoryORM.findOneOrFail(id);
  };

  const remove = async (id: string): Promise<void> => {
    throw new Error('Method not implemented.');
  };

  return {
    ...repositoryORM,
    findOne,
    findAll,
    create,
    update,
    remove,
  };
};

export default userRepositoryImplementation;
