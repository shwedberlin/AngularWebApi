var webpack = require("webpack");
var webpackMerge = require("webpack-merge");
var commonConfig = require("./webpack.common.js");
var helpers = require("./helpers");

module.exports = webpackMerge(commonConfig, {
    //'eval-cheap-module-source-map' is faster, but files are bigger
    //switched to 'source-map' with watch mode
    devtool: "source-map", 

    output: {
        path: helpers.root("dist"),
        publicPath: "/",
        filename: "[name].js",
        chunkFilename: "[id].chunk.js"
    }
});