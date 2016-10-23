// Taken from webpack-dev-middleware/middleware.js, and modified to look better
import chalk from 'chalk';

export default function reporter(reporterOptions) {
  const state = reporterOptions.state;
  const stats = reporterOptions.stats;
  const options = reporterOptions.options;

  if (state) {
    let displayStats = (!options.quiet && options.stats !== false);
    if (displayStats && !(stats.hasErrors() || stats.hasWarnings()) &&
      options.noInfo) {
      displayStats = false;
    }
    const firstFive = stats.toString().split('\n').slice(0, 5).join('\n');
    if (displayStats) {
      options.log(chalk.magenta(firstFive));
    }
    if (!options.noInfo && !options.quiet) {
      options.log(chalk.green('webpack: bundle is now VALID.'));
    }
  } else {
    options.log(chalk.red.bold('webpack: bundle is now INVALID.'));
  }
}
