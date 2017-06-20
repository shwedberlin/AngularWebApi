var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

const vendorLESS = new ExtractTextPlugin('[name].less.css');

module.exports = {
    entry: {
        //polyfills: ['./app/polyfills.ts'],
        vendor: [
            './app/polyfills.ts',
            './app/vendor/vendor.ts'
        ]
    },

    output: {
        path: helpers.root('dist'),
        publicPath: '/',
        filename: '[name].js',
        library: '[name]_[hash]'
    },

    resolve: {
        extensions: ['.js']
    },

    devtool: 'eval-cheap-module-source-map',
    
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
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'url-loader?name=assets/[name].[hash].[ext]&publicPath=/dist/&limit=10000'
            },
            {// vendor less
                test: /\.less$/,
                include: helpers.root('app', 'vendor'),
                use: ['to-string-loader'].concat(vendorLESS.extract(['css-loader', 'less-loader']))
            }
        ]
    },

    plugins: [
        vendorLESS,
        new webpack.ProvidePlugin({ $: 'jquery', jQuery: 'jquery' }), // Maps these identifiers to the jQuery package (because Bootstrap expects it to be a global variable)
        // Workaround for angular/angular#11580 for angular v4
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            helpers.root('./app'), // location of your src
            {} // a map of your routes
        ),
        new webpack.IgnorePlugin(/^vertx$/), // Workaround for https://github.com/stefanpenner/es6-promise/issues/100
        new webpack.DllPlugin({
            path: helpers.root('dist', '[name]-manifest.json'),
            name: '[name]_[hash]'
        })
    ]
};