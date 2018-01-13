const path = require('path');
var webpack = require('webpack');

//const AddModuleExportsPlugin = require('add-module-exports-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

module.exports = {
  devtool: 'eval',
  entry: {
    "app" : './src/js/index.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [
      path.join(__dirname, 'src'),
      path.join(__dirname, 'public'),
      'node_modules',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
    //publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [

    new HtmlWebpackPlugin({
      alwaysWriteToDisk: true,
      hash: true,
      title: 'My Awesome application',
      myPageHeader: 'Hello World',
      template: './public/index.html',
    }),
    new HtmlWebpackHarddiskPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "build"),
    //host: 'localhost',
    port: 3000,
    //historyApiFallback: true,
    headers: { 'Access-Control-Allow-Origin': '*' }
    //hot: true
  }
};