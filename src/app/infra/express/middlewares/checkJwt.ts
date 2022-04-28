import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import config from '../../config/config';

interface JWTPayload {
  name: string;
  userId: string;
}

export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
  //Get the jwt token from the head
  const token = <string>req.headers['auth'];
  let jwtPayload: JWTPayload;

  //Try to validate the token and get data
  try {
    jwtPayload = jwt.verify(token, config.jwtSecret) as JWTPayload;
    res.locals.jwtPayload = jwtPayload;
  } catch (error) {
    //If token is not valid, respond with 401 (unauthorized)
    res.status(401).send();
    return;
  }

  //The token is valid for 1 hour
  //We want to send a new token on every request
  const { userId, name } = jwtPayload;
  const newToken = jwt.sign({ userId, name }, config.jwtSecret, {
    expiresIn: '1h',
  });
  res.setHeader('token', newToken);

  //Call the next middleware or controller
  next();
};
