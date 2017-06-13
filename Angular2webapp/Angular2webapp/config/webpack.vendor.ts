var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.vendor.common.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
    devtool: 'source-map',

    output: {
        path: helpers.root('dist'),
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js',
        library: '[name]_[hash]'//,
        //libraryTarget: 'commonjs2'
    },

    plugins: [
        new ExtractTextPlugin('[name].css'),
        new webpack.DllPlugin({
            path: helpers.root('dist', '[name]-manifest.json'),
            name: '[name]_[hash]'
        })//,
        //new webpack.DllReferencePlugin({
        //    context: __dirname,
        //    manifest: require('./dist/[name]-manifest.json'),
        //    sourceType: 'cpmmonjs2'
        //})
    ]
});