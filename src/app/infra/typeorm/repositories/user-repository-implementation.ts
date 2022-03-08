import { UserEntity } from '../entity/User';
import { PartialUser, User } from '../../../core/entities/user';
import { Connection } from 'typeorm';
import { UserRepository } from '../../../core/repositories/User.repository';

const userRepositoryImplementation = (connection: Connection): UserRepository => {
  const repositoryORM = connection.getRepository<User>(UserEntity);

  const findOne = async (id: string): Promise<User | undefined> => {
    const user = await repositoryORM.findOne(id);
    return user;
  };

  const findAll = async (): Promise<User[]> => {
    const users = await repositoryORM.find();
    return users;
  };

  const create = async (user: PartialUser): Promise<User | undefined> => {
    const createdUser = await repositoryORM.insert(user);
    const idUpdated = createdUser.generatedMaps[0].id;
    return await findOne(idUpdated);
  };

  const update = async (id: string, user: PartialUser): Promise<User | undefined> => {
    await repositoryORM.save(user);
    const updateResult = await repositoryORM.update({ id }, user);
    const idUpdated = updateResult.generatedMaps[0].id;
    return await findOne(idUpdated);
  };

  const remove = async (id: string): Promise<User> => {
    throw new Error('Method not implemented.');
  };

  return {
    ...repositoryORM,
    findOne,
    findAll,
    create,
    update,
    delete: remove,
  };
};

export default userRepositoryImplementation;
