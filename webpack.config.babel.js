import webpack from 'webpack';
import path from 'path';
import Dash from 'webpack-dashboard/plugin'; // eslint-disable-line
import qs from 'querystring';

const cssQuery = qs.stringify({
  modules: true,
  importLoaders: 1,
  localIdentName: '[path][name]-[local]',
});

const config = {
  entry: [
    'babel-polyfill',
    './client/index.jsx',
  ],
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false,
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
            'es2015',
            'es2016',
            'stage-0',
          ],
          plugins: ['transform-runtime'],
        },
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.css$/,
        include: path.join(__dirname, 'client', 'styles'),
        loaders: ['style', `css?${cssQuery}`, 'sass?sourceMap'],
      },
    ],
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
};

if (process.env.NODE_ENV === 'development') {
  config.entry.splice(1, 0, 'webpack-hot-middleware/client');
  config.plugins.push(new webpack.HotModuleReplacementPlugin(), new Dash());
  config.module.loaders[0].query.presets.push('react-hmre');
  config.devtool = 'inline-source-map';
}

export default config;
