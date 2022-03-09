import { NextFunction, Request, Response } from 'express';
import { userInteractor } from '../../../../core/interactors';

const findAllUsersController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await userInteractor?.findAll();
    res.send({ users });
  } catch (error) {
    return next(error);
  }
};

export default findAllUsersController;
