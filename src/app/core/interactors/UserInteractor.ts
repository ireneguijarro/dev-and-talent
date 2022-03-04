import { User } from '../entities/user';
import { UserRepository } from '../repositories/user';

class UserInteractor implements UserRepository {
  userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async findAll(): Promise<User[]> {
    const users = await this.userRepository.findAll();
    if (!users) {
      throw new Error('No users found');
    }
    return users;
  }
}

export default UserInteractor;
