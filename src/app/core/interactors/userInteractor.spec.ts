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
    delete: remove,
  };
};

describe('User Interactor', () => {
  describe('findAll', () => {
    it('With empty users should not throw Error', async () => {
      findAll.mockReturnValue([]);
      const interactor = userInteractor(userRepositoryMock());

      await expect(interactor.findAll()).resolves.toEqual([]);
    });
  });
});
