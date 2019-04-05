const chalk = require('chalk');
const express = require('express');
const webpack = require('webpack');
const resolve = require('path').resolve;
const compression = require('compression');

const app = express();
const isProd = process.env.NODE_ENV === 'production';
const outputPath = resolve(process.cwd(), isProd ? 'dist' : 'build');
const config = require(resolve(process.cwd(), 'webpack.config.js'));

const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');

module.exports = function() {
  console.log(
    chalk.yellow(
      `\nStarting the ${isProd ? `PRODUCTION` : `DEVELOPMENT`} server...`
    )
  );

  const announceServer = () => {
    console.log(chalk.green(`\nServer up at http://localhost:${port}`));
    console.log(chalk.yellow('\nLogging requests...\n'));
  };

  if (isProd) {
    // Enable gzip compression and serve assets as they build when prod
    app.use(compression());

    console.log(chalk.gray('Compiling production webpack config'));
    webpack(config, afterWebpack);
  } else {
    // Start a webpack dev server with hot module reloading when dev
    console.log(chalk.gray('Compiling webpack config'));
    const compiler = webpack(config);

    const middleware = devMiddleware(compiler, {
      // lazy: true,
      publicPath: config.output.publicPath,
      stats: false,
      logLevel: 'warn',
    });

    app.use(middleware);
    app.use(hotMiddleware(compiler, {
    }));
  }

  // Respond with static files when they exist
  app.use('/', express.static(outputPath));

  // Redirect all other routes to index.html to let React handle routing client-side
  app.get(
    '/*',
    (req, res) =>
      console.log('Servicing request for', req.url) ||
      res.send(`
  <!DOCTYPE html>
  <html>
    <head>
      <title>CIVIC 2018 - A Hack Oregon Project</title>
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width,initial-scale=1">
      <meta charset="utf-8"/>
      <style>html, body { padding: 0; margin: 0; }</style>
      <!-- FontAwesome -->
      <script src="https://use.fontawesome.com/031ebbe0c7.js"></script>
    </head>
    <body style="margin:0">
      <div id="content"></div>
      <script type="text/javascript" src="/main.bundle.js"></script>
    </body>
  </html>
  `)
  );

  // Start the server
  const port = process.env.PORT || 3000;
  app.listen(port, announceServer);
};
