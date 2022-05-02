import { NextFunction, Request, Response } from 'express';
import { clientInteractor } from '../../../../core/interactors';

const findAllClientsController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const clients = await clientInteractor?.findAll();
    return res.send({ clients });
  } catch (error) {
    return next(error);
  }
};

export default findAllClientsController;
