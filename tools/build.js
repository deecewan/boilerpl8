import webpack from 'webpack';
import serverConfig from '../webpack.server';
import clientConfig from '../webpack.client';

const buildType = process.env.BUILD;
const buildAll = process.env.BUILD === 'all';

if (buildAll || buildType === 'server') {
  webpack(serverConfig, (err, stats) => {
    if (err) {
      console.error(err);
    }
    if (stats.hasErrors()) {
      stats.toJson('errors-only').errors.forEach(error => console.log(error));
    }
  });
}

if (buildAll || buildType === 'client') {
  webpack(clientConfig, (err, stats) => {
    if (err) {
      console.error(err);
    }
    if (stats.hasErrors()) {
      stats.toJson('errors-only').errors.forEach(error => console.log(error));
    }
  });
}
