import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get('/health', (req: Request, res: Response) => {
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
