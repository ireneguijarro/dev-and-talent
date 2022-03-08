import { Request, Response } from 'express';
import { userInteractor } from '../../../../core/interactors';

const createUserController = async (req: Request, res: Response) => {
  const user = await userInteractor?.create(req.body);
  res.send({ user });
};

export default createUserController;
