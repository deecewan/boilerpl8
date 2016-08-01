import webpack from 'webpack';
import Config from 'webpack-config';
import path from 'path';

export default new Config().merge({
  entry: [
    'babel-polyfill',
  ],
  devtool: 'inline-source-map',
  output: {
    path: path.join(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  stats: {
    color: true,
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint?{fix:true}'],
        exclude: /(node_modules|bower_components|dist)/,
      },
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: [
            'react-hmre',
          ],
        },
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
});
