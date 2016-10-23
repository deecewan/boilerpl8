import { Router } from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import Database from './models/index';
import routes from './routes';

const db = new Database();
db.syncModels();

const app = new Router();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

app.use((err, req, res, next) => {
  console.log(err);
  if (process.env.NODE_ENV === 'development') {
    return res.status(500).json(err);
  }
  res.status(500).json({ message: 'An unexpected error has occurred.' +
  '  Please refresh and try again.' });
  return next();
});

export default app;
