import { DeleteResponse } from '../entities/Response.interface';
import { PartialUser, User } from '../entities/user';
import { UserRepository } from '../repositories/User.repository';
import { NO_USERS_FOUND, NO_USER_FOUND } from './errors';

const userInteractor = (userRepository: UserRepository): UserRepository => {
  const findAll = async (): Promise<User[]> => {
    const users = await userRepository.findAll();
    if (!users) {
      throw new Error(NO_USERS_FOUND);
    }
    return users;
  };

  const findOne = async (id: string): Promise<User> => {
    const user = await userRepository.findOne(id);
    if (!user) {
      throw new Error(NO_USER_FOUND);
    }
    return user;
  };

  const create = async (user: PartialUser): Promise<User | undefined> => {
    const createdUser = await userRepository.create(user);
    return createdUser;
  };

  const update = async (id: string, user: PartialUser): Promise<User> => {
    await findOne(id);
    const updatedUser = await userRepository.update(id, user);
    return updatedUser;
  };

  const remove = async (id: string): Promise<DeleteResponse> => {
    return await userRepository.remove(id);
  };

  return {
    findAll,
    findOne,
    create,
    update,
    remove,
  };
};

export default userInteractor;
