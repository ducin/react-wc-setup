const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devServerPort = 8083;

module.exports = {
  entry: {
    bundle: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: '[name].[hash:8].js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader' },
      { test: /\.jsx?$/, loader: 'babel-loader' },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ]
}
