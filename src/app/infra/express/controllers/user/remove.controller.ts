import { NextFunction, Request, Response } from 'express';
import { userInteractor } from '../../../../core/interactors';

const removeUserController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await userInteractor?.remove(req.params.id);
    res.sendStatus(202);
  } catch (error) {
    return next(error);
  }
};

export default removeUserController;
