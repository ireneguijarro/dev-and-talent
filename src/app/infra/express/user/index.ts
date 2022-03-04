import express, { Request, Response } from 'express';
import { userInteractor } from '../../../core/interactors';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  const users = await userInteractor.findAll();
  res.send({ users });
});

export default router;
