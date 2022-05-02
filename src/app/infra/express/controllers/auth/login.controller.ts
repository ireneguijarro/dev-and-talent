import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { userInteractor } from '../../../../core/interactors';
import config from '../../../config/config';

const loginController = async (req: Request, res: Response) => {
  //Check if username and password are set
  const { name, password } = req.body;
  if (!(name && password)) {
    res.status(400).send();
    return;
  }

  try {
    const user = await userInteractor?.findOne({ name });
    if (!user) {
      res.status(401).send();
      return;
    }
    if (user.password !== password) {
      res.status(401).send();
      return;
    }
    //Sing JWT, valid for 1 hour
    const token = jwt.sign({ userId: user.id, name: user.name }, config.jwtSecret, { expiresIn: '1h' });

    //Send the jwt in the response
    res.send(token);
  } catch (error) {
    res.status(401).send(error);
  }
};

export default loginController;
