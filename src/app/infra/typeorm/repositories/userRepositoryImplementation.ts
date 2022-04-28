import { UserEntity } from '../entity/User';
import { PartialUser, User } from '../../../core/entities/user';
import { Connection } from 'typeorm';
import { UserRepository } from '../../../core/repositories/User.repository';
import { DeleteResponse } from '../../../core/entities/Response.interface';

const userRepositoryImplementation = (connection: Connection): UserRepository => {
  const repositoryORM = connection.getRepository<User>(UserEntity);

  const findOne = async (key: { [key: string]: string }): Promise<User> => {
    const user = await repositoryORM.findOneOrFail({ where: key });
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

  const remove = async (id: string): Promise<DeleteResponse> => {
    const { affected } = await repositoryORM.delete(id);
    return affected;
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
