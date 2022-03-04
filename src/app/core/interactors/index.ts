import { UserRepository } from '../../infra/typeorm/repositories/UserRepository';
import UserInteractor from './UserInteractor';

const userRepository = new UserRepository();
const userInteractor = new UserInteractor(userRepository);

export { userInteractor };
