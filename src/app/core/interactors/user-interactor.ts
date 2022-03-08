import { PartialUser, User } from '../entities/user';
import { UserRepository } from '../repositories/User.repository';

const userInteractor = (userRepository: UserRepository): UserRepository => {
  const findAll = async (): Promise<User[]> => {
    const users = await userRepository.findAll();
    if (!users) {
      throw new Error('No users found');
    }
    return users;
  };

  const findOne = async (id: string): Promise<User> => {
    const user = await userRepository.findOne(id);
    if (!user) {
      throw new Error('No user found');
    }
    return user;
  };

  const create = async (user: PartialUser): Promise<User | undefined> => {
    const createdUser = await userRepository.create(user);
    return createdUser;
  };

  const update = async (id: string, user: PartialUser): Promise<User | undefined> => {
    await findOne(id);
    const updatedUser = await userRepository.update(id, user);
    return updatedUser;
  };

  const remove = async (id: string): Promise<User> => {
    const deletedUser = await userRepository.delete(id);
    return deletedUser;
  };

  return {
    findAll,
    findOne,
    create,
    update,
    delete: remove,
  };
};

export default userInteractor;
