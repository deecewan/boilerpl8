import Config from 'webpack-config';
import config from './webpack.config';
import fs from 'fs';

const nodeModules = {};
fs.readdirSync('node_modules')
  .filter(x => ['.bin'].indexOf(x) === -1)
  .forEach(mod => {
    nodeModules[mod] = `commonjs ${mod}`;
  });

export default new Config().merge(config).merge({
  entry: ['./index.js'],
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
  output: {
    filename: 'server.js',
  },
  resolve: {
    modulesDirectories: ['node_modules'],
  },
  externals: nodeModules,
});
