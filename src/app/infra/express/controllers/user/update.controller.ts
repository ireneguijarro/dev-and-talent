import { NextFunction, Request, Response } from 'express';
import { userInteractor } from '../../../../core/interactors';

const updateUserController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await userInteractor?.update(req.params.id, req.body);
    res.send({ user });
  } catch (error) {
    return next(error);
  }
};

export default updateUserController;
