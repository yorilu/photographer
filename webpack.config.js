var webpack = require('webpack')
var path = require('path')
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './www/app.js',
  output: {
    path: './www/dist/',
    filename: './bundle.js'
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: "json"
      },
      {
        test: /\.jsx$|\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {test: /\.css$/, loader: ExtractTextPlugin.extract("style", "css")},
      {test: /\.(jpg|png)$/, loader: "url?limit=8192&name=imgs/[hash:8].[name].[ext]"},
      {test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!sass')}
    ]
  },
  plugins: [
    new webpack.BannerPlugin('This file is created by yori'),
    new ExtractTextPlugin("main.css")
  ]
}