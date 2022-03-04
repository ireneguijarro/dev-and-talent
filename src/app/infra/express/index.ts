import express from 'express';
import { createConnection } from 'typeorm';
import users from './routes/users.routes';

const app = express();
const port = 3000;

createConnection().then(async () => {
  app.use('/users', users);

  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
});
