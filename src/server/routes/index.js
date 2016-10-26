import express, { Router } from 'express';
import path from 'path';
import fs from 'fs';

const router = new Router();

fs
  .readdirSync(path.resolve('src', 'server', 'routes'))
  .filter(file => (file.indexOf('.') !== 0) && (file !== 'index.js'))
  .forEach(file => {
    const routeName = file.substring(0, file.length - 3);
    // eslint-disable-next-line global-require
    const route = require(path.resolve(__dirname, file)).default;
    if (routeName.startsWith('__')) {
      // not an API route
      router.use(`/${routeName.substr(2)}`, route);
    } else {
      router.use(`/api/v${process.env.API_VERSION || 1}/${routeName}`, route);
    }
  });

router.use('/static', express.static(path.resolve('static')));

router.get('/', (req, res) => {
  res.sendFile(path.resolve('static', 'index.html'));
});

export default router;
