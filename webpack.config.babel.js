import webpack from 'webpack';
import path from 'path';
import Dash from 'webpack-dashboard/plugin'; // eslint-disable-line

const config = {
  entry: [
    'react-hot-loader/patch',
    'babel-polyfill',
    './src/client/index.jsx',
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
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ],
};

if (process.env.NODE_ENV === 'development') {
  config.entry.splice(1, 0, 'webpack-hot-middleware/client');
  config.plugins.push(new webpack.HotModuleReplacementPlugin(), new Dash());
  config.devtool = 'inline-source-map';
}

export default config;
