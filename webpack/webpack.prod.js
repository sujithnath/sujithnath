const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/portfolio/index.js',
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, '..'),
  },
  optimization: {
    minimize: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'index',
      description: 'index',
      template: 'src/portfolio/index.html',
    }),
  ],
};
