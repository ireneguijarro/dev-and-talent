import { NextFunction, Request, Response } from 'express';
import { userInteractor } from '../../../../core/interactors';
import { validate } from '../../../ajv';

const findOneUserController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const properties = {
      id: { type: 'string', format: 'uuid' },
    };
    const data = req.params;
    validate({ properties, data });
    const user = await userInteractor?.findOne({ id: req.params.id });
    res.send({ user });
  } catch (error) {
    return next(error);
  }
};

export default findOneUserController;
