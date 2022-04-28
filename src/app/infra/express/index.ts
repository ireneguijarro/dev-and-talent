import bodyParser from 'body-parser';
import express from 'express';
import { Connection, createConnection } from 'typeorm';
import { createUserInteractor } from '../../core/interactors';
import users from './routes/users.routes';
import auth from './routes/auth.routes';

const app = express();
app.use(bodyParser.json());
const port = 3000;

createConnection().then(async (connection: Connection) => {
  createUserInteractor(connection);
  app.use('/users', users);
  app.use('/auth', auth);

  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
});
