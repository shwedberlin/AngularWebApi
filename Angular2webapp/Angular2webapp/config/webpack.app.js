var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;

const extractLESS = new ExtractTextPlugin('app.less.css');

module.exports = {
    entry: {
        app: './app/main.ts'
    },

    output: {
        path: helpers.root('dist'),
        publicPath: '/',
        filename: '[name].js'
    },

    watch: true,

    devtool: 'eval-cheap-module-source-map',

    resolve: {
        extensions: ['.ts', '.js', '.less']
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'awesome-typescript-loader',
                        options: {
                            configFileName: helpers.root('', 'tsconfig.json')
                        }
                    },
                    {
                        loader: 'angular2-template-loader'
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: false,
                        removeComments: false,
                        collapseWhitespace: false
                    }
                }]
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'url-loader?name=assets/[name].[hash].[ext]&publicPath=/dist/&limit=10000'
            },
            {// app less
                test: /\.less$/,
                include: helpers.root('app'),
                exclude: helpers.root('app', 'vendor'),
                use: ['to-string-loader'].concat(extractLESS.extract(['css-loader', 'less-loader']))
            }
        ]
    },

    plugins: [
        extractLESS,
        new CheckerPlugin(),       
        new webpack.DllReferencePlugin({
            context: '.',
            manifest: require('../dist/vendor-manifest.json')
        }),
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map', // Remove this line if you prefer inline source maps
            moduleFilenameTemplate: helpers.root('dist', '[resourcePath]') // Point sourcemap entries to the original file locations on disk
        })
    ]
};