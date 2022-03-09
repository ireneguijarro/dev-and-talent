import { Connection } from 'typeorm';
import userRepositoryImplementation from '../../infra/typeorm/repositories/user-repository-implementation';
import { UserRepository } from '../repositories/User.repository';
import UserInteractor from './userInteractor';

let userInteractor: UserRepository | null = null;
const createUserInteractor = (connection: Connection) => {
  userInteractor = UserInteractor(userRepositoryImplementation(connection));
};

export { userInteractor, createUserInteractor };
