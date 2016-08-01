import express from 'express';
import path from 'path';
const app = express();

// setup webpack to compile
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../webpack.client';

if (process.env.NODE_ENV === 'development') {
  // only run the webpack auto-compilation on development
  const compiler = webpack(config, (err, stats) => {
    if (err) {
      console.log(err);
    }
    if (stats.hasErrors()) {
      stats.toJson('errors-only').errors.forEach(error => console.log(error));
    }
  });

  app.use(webpackDevMiddleware(compiler, {
    publicPath: '/',
  }));
  app.use(webpackHotMiddleware(compiler));

// Do "hot-reloading" of react stuff on the server
// Throw away the cached client modules and let them be re-required next time
  compiler.plugin('done', () => {
    console.log('Clearing /client/ module cache from server');
    Object.keys(require.cache).forEach(id => {
      if (/[\/\\]client[\/\\]/.test(id)) delete require.cache[id];
    });
  });
}

app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'index.html'));
});

export default app;
