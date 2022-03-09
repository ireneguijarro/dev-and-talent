import { NextFunction, Request, Response } from 'express';
import { userInteractor } from '../../../../core/interactors';

const findOneUserController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await userInteractor?.findOne(req.params.id);
    res.send({ user });
  } catch (error) {
    return next(error);
  }
};

export default findOneUserController;
