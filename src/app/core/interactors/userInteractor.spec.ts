import { PartialUser, User, UserAvailability } from '../entities/user';
import { NO_USERS_FOUND, NO_USER_FOUND } from './errors';
import userInteractor from './userInteractor';

const findAll = jest.fn();
const findOne = jest.fn();
const create = jest.fn();
const update = jest.fn();
const remove = jest.fn();

const userRepositoryMock = () => {
  return {
    findAll,
    findOne,
    create,
    update,
    remove,
  };
};

const usersMock: User[] = [
  {
    id: 'abc',
    name: 'Irene',
    password: 'password',
    availability: UserAvailability.MORNINGS,
    email: 'irene@email.com',
    country: 'Spain',
  },
];

const partialUserMock: PartialUser = {
  name: 'Irene',
  password: 'password',
  availability: UserAvailability.MORNINGS,
  email: 'irene@email.com',
  country: 'Spain',
};

describe('User Interactor', () => {
  describe('findAll', () => {
    it('Should not throw Error when repository returns []', async () => {
      findAll.mockReturnValue([]);
      const interactor = userInteractor(userRepositoryMock());
      await expect(interactor.findAll()).resolves.toEqual([]);
    });

    it('Should return the same users repository returns', async () => {
      findAll.mockReturnValue(usersMock);
      const interactor = userInteractor(userRepositoryMock());
      await expect(interactor.findAll()).resolves.toEqual(usersMock);
    });

    it('Should throw Error when repository return null', async () => {
      findAll.mockReturnValue(null);
      const interactor = userInteractor(userRepositoryMock());
      await expect(interactor.findAll()).rejects.toEqual(new Error(NO_USERS_FOUND));
    });

    it('Should throw Error when repository return undefined', async () => {
      findAll.mockReturnValue(undefined);
      const interactor = userInteractor(userRepositoryMock());
      await expect(interactor.findAll()).rejects.toEqual(new Error(NO_USERS_FOUND));
    });
  });

  describe('findOne', () => {
    it('Should return the same user repository returns', async () => {
      findOne.mockReturnValue(usersMock[0]);
      const interactor = userInteractor(userRepositoryMock());
      await expect(interactor.findOne({ id: usersMock[0].id })).resolves.toEqual(usersMock[0]);
    });

    it('Should throw Error when repository return null', async () => {
      findOne.mockReturnValue(null);
      const interactor = userInteractor(userRepositoryMock());
      await expect(interactor.findOne({ id: 'abc' })).rejects.toEqual(new Error(NO_USER_FOUND));
    });

    it('Should throw Error when repository return undefined', async () => {
      findOne.mockReturnValue(undefined);
      const interactor = userInteractor(userRepositoryMock());
      await expect(interactor.findOne({ id: 'abc' })).rejects.toEqual(new Error(NO_USER_FOUND));
    });
  });

  describe('create', () => {
    it('Should return the created user', async () => {
      create.mockReturnValue(usersMock[0]);
      const interactor = userInteractor(userRepositoryMock());
      await expect(interactor.create(partialUserMock)).resolves.toEqual(usersMock[0]);
    });
  });

  describe('update', () => {
    it('Should return the updated user', async () => {
      findOne.mockReturnValue(usersMock[0]);
      update.mockReturnValue(usersMock[0]);
      const interactor = userInteractor(userRepositoryMock());
      await expect(interactor.update('id', partialUserMock)).resolves.toEqual(usersMock[0]);
      expect(findOne).toHaveBeenCalledWith({ id: 'id' });
    });

    it('Should return error if user does not exist', async () => {
      findOne.mockReturnValue(null);
      const interactor = userInteractor(userRepositoryMock());
      await expect(interactor.update('id', partialUserMock)).rejects.toEqual(new Error(NO_USER_FOUND));
    });
  });

  describe('remove', () => {
    it('Should return void if ok', async () => {
      const interactor = userInteractor(userRepositoryMock());
      await expect(interactor.remove('id')).resolves.toEqual(undefined);
    });

    it('Should reject repository error if not ok', async () => {
      const error = new Error('Error');
      remove.mockRejectedValue(error);
      const interactor = userInteractor(userRepositoryMock());
      await expect(interactor.remove('id')).rejects.toEqual(error);
    });
  });
});
