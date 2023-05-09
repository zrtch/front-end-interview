const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development", // production
  entry: path.join(__dirname, 'src', 'index.js'), // 文件路口
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      { // 只要涉及到.js结尾的都走babel-loader
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
      filename: "index.html" // 产出的文件名
    })
  ],
  devServer: {
    port: 3000,
    static: './dist'
  }
}