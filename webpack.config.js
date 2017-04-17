var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractLESS = new ExtractTextPlugin('css/style.css');

module.exports = {
  devtool: 'eval-source-map',

  entry:  {
    "main": __dirname + "/app/js/main.js",
  },
  output: {
    path: __dirname + "/public/dist/",
    filename: "[name].js"
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: "json"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      {
        test : /\.(less|css)$/,
        loader: ExtractTextPlugin.extract('style', 'css!less')
      }
    ]
  },
  plugins: [
    extractLESS
  ]
}
