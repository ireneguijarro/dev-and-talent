import { Request, Response } from 'express';
import { userInteractor } from '../../../../core/interactors';

const findAllUsersController = async (req: Request, res: Response) => {
  const users = await userInteractor.findAll();
  res.send({ users });
};

export default findAllUsersController;
