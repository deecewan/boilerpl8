import path from 'path';
import chokidar from 'chokidar';
import express from 'express';
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

/* This comes from Glenjamin's Ultimate Hot Reloading Example
 * ( https://github.com/glenjamin/ultimate-hot-reloading-example ) */

// Do "hot-reloading" of react stuff on the server
// Throw away the cached client modules and let them be re-required next time
  compiler.plugin('done', () => {
    console.log('Clearing /client/ module cache from server');
    Object.keys(require.cache).forEach(id => {
      if (/[\/\\]client[\/\\]/.test(id)) delete require.cache[id];
    });
  });

  const watcher = chokidar.watch('./server');

  watcher.on('ready', () => {
    watcher.on('all', () => {
      console.log('Clearing /server/ module cache from server');
      Object.keys(require.cache).forEach(id => {
        if (/[\/\\]server[\/\\]/.test(id)) delete require.cache[id];
      });
    });
  });
}

app.use('/dist', express.static('dist'));
app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'index.html'));
});

export default app;
