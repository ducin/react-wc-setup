const prodConfig = require('./webpack.config');
const devConfig = Object.assign({}, prodConfig);

const devServerPort = 8083;

devConfig.entry.hmr = [
  'webpack-dev-server/client?http://localhost:' + devServerPort,
];

devConfig.watch = true;

devConfig.devServer = {
  port: devServerPort,
  inline: true
};

module.exports = devConfig;
