import 'dotenv/config';
import 'reflect-metadata';
import express from 'express';
import { Connection, createConnection } from 'typeorm';
import { User } from './entity/User';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
const port = 3000;

createConnection()
  .then(async (connection: Connection) => {
    app.listen(port);
    console.log(`Express server has started on port ${port}.`);
    console.log('Inserting a new user into the database...');
    const user = new User();
    user.firstName = 'Timber';
    user.lastName = 'Saw';
    user.age = 25;
    await connection.manager.save(user);
    console.log('Saved a new user with id: ' + user.id);

    console.log('Loading users from the database...');
    const users = await connection.manager.find(User);
    console.log('Loaded users: ', users);

    console.log('Here you can setup and run express/koa/any other framework.');
  })
  .catch((error: Error) => console.log(error));

let retries = 5;
while (retries) {
  try {
    createConnection();
    break;
  } catch (error) {
    console.log(error);
    console.log('hello');
    // wait 5 seconds
    setTimeout(() => {
      retries -= 1;
      console.log(`retries left: ${retries}`);
    }, 5000);
  }
}
