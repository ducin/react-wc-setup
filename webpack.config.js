const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
});

const devServerPort = 8083;

module.exports = {
  entry: {
    hmr: [
      'webpack-dev-server/client?http://localhost:' + devServerPort,
    ],
    bundle: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: '[name].js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader' },
      { test: /\.jsx?$/, loader: 'babel-loader' },
    ],
  },
  plugins: [
    HtmlWebpackPluginConfig
  ],
  devServer: {
    port: devServerPort,
    inline: true
  }
}
