import { NextFunction, Request, Response } from 'express';
import { userInteractor } from '../../../../core/interactors';

const createUserController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await userInteractor?.create(req.body);
    res.send({ user });
  } catch (error) {
    return next(error);
  }
};

export default createUserController;
