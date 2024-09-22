import express, {Express, Request, Response} from 'express';
import cors from 'cors';
import {off} from 'process';
import {aptos, config} from './common/config';
import {AccountAddress, MoveString, MoveVector, U64} from '@aptos-labs/ts-sdk';
import {getPosts} from './post';

const app: Express = express();
const port = process.env.PORT || 8080;

// Enable CORS for all routes
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

app.get('/api/v1/posts/get_all', async (req: Request, res: Response) => {
  console.log('GET /api/v1/posts/get_all');
  try {
    const posts = await getPosts();
    return res.status(200).send(posts);
  } catch (error) {
    return res.status(500).send(error);
  }
});
