var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
    devtool: 'eval-cheap-module-source-map',
  
  output: {
      path: helpers.root('dist'),
      publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  }
});