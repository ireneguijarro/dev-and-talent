import bodyParser from 'body-parser';
import express from 'express';
import { Connection, createConnection } from 'typeorm';
import { createUserInteractor } from '../../core/interactors';
import users from './routes/users.routes';
import auth from './routes/auth.routes';
import { checkJwt } from './middlewares/checkJwt';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(
  cors({
    origin: '*',
  }),
);
const port = 3000;

createConnection().then(async (connection: Connection) => {
  createUserInteractor(connection);
  app.use('/users', checkJwt, users);
  app.use('/auth', auth);

  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
});
