import { Request, Response } from 'express';
import { userInteractor } from '../../../../core/interactors';

const findOneUserController = async (req: Request, res: Response) => {
  const user = await userInteractor?.findOne(req.params.id);
  res.send({ user });
};

export default findOneUserController;
