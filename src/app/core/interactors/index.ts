import { Connection } from 'typeorm';
import clientRepositoryImplementation from '../../infra/typeorm/repositories/clientRepositoryImplementation';
import userRepositoryImplementation from '../../infra/typeorm/repositories/userRepositoryImplementation';
import { ClientRepository } from '../repositories/Client.repository';
import { UserRepository } from '../repositories/User.repository';
import ClientInteractor from './clientInteractor';
import UserInteractor from './userInteractor';

let userInteractor: UserRepository | null = null;
let clientInteractor: ClientRepository | null = null;

const createInteractors = (connection: Connection) => {
  userInteractor = UserInteractor(userRepositoryImplementation(connection));
  clientInteractor = ClientInteractor(clientRepositoryImplementation(connection));
};

export { userInteractor, clientInteractor, createInteractors };
