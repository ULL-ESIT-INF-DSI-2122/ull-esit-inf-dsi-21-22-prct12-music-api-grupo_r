import express from 'express';
import './db/mongoose';
import {postRouter} from './routers/post';
import {getRouter} from './routers/get';
import {defaultRouter} from './routers/default';
import {join} from 'path';

const app = express();

app.use(express.json());
app.use(express.static(join(__dirname, '../public')));
app.use(postRouter);
app.use(getRouter);
app.use(defaultRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
