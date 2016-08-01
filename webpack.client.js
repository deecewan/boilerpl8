import webpack from 'webpack';
import Config from 'webpack-config';
import config from './webpack.config';

export default new Config().merge(config).merge({
  entry: [
    'webpack-hot-middleware/client',
    './client/index.jsx',
  ],
  output: {
    publicPath: '/',
    filename: 'client.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});
