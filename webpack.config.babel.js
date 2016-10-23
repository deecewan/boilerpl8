import webpack from 'webpack';
import path from 'path';
import Dash from 'webpack-dashboard/plugin'; // eslint-disable-line
import Extracter from 'extract-text-webpack-plugin';

// postcss plugins
import cssnext from 'postcss-cssnext';
import short from 'postcss-short';
import utilities from 'postcss-utilities';

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
    new Extracter('styles.css'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ],
  postcss() {
    return [
      cssnext,
      short,
      utilities,
    ];
  },
};

if (process.env.NODE_ENV === 'development') {
  config.entry.splice(1, 0, 'webpack-hot-middleware/client');
  config.plugins.push(new webpack.HotModuleReplacementPlugin(), new Dash());
  config.devtool = 'inline-source-map';
  config.module.loaders.push({
    test: /\.css$/,
    loader: 'style-loader!' +
    'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!' +
    'postcss-loader?sourceMap=inline',
  });
} else {
  config.module.loaders.push({
    test: /\.css$/,
    loader: Extracter.extract('style-loader',
      'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!' +
      'postcss-loader?sourceMap=inline'),
  });
}

export default config;
