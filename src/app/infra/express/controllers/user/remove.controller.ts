import { NextFunction, Request, Response } from 'express';
import { userInteractor } from '../../../../core/interactors';

const removeUserController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const affected = await userInteractor?.remove(req.params.id);
    if (affected) {
      res.sendStatus(202);
    }
    res.sendStatus(204);
  } catch (error) {
    return next(error);
  }
};

export default removeUserController;
