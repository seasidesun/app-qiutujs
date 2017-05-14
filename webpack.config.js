var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractLESS = new ExtractTextPlugin('style.css');
var extractJs = new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}});

module.exports = {
  devtool: 'eval-source-map',

  entry:  {
    "bundle": __dirname + "/app/main.js",
  },
  output: {
    path: __dirname + "/build/",
    filename: "[name].js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react'
      },
      {
        test : /\.(less)$/,
        loader: ExtractTextPlugin.extract([ 'css-loader', 'less-loader' ])
       }
    ]
  },
  plugins: [
    extractLESS,
    // extractJs
  ]
}
