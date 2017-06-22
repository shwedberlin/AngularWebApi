var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var helpers = require("./helpers");

const extractLESS = new ExtractTextPlugin("app.less.css");
const vendorLESS = new ExtractTextPlugin("[name].less.css");

module.exports = {
    entry: {
        polyfills: "./app/polyfills.ts",
        vendor: "./app/vendor/vendor.ts",
        app: "./app/main.ts"
    },

    resolve: {
        extensions: [".ts", ".js", ".less"]
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: "awesome-typescript-loader",
                        options: {
                            configFileName: helpers.root("tsconfig.json")
                        }
                    },
                    {
                        loader: "angular2-template-loader"
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader",
                    options: {
                        minimize: false,
                        removeComments: false,
                        collapseWhitespace: false
                    }
                }]
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: "url-loader?name=assets/[name].[hash].[ext]&publicPath=/dist/&limit=10000"
            },
            {// vendor less
                test: /\.less$/,
                include: helpers.root("app", "vendor"),
                use: ["to-string-loader"].concat(vendorLESS.extract(["css-loader", "less-loader"]))
            },
            {// app less
                test: /\.less$/,
                include: helpers.root("app"),
                exclude: helpers.root("app", "vendor"),
                use: ["to-string-loader"].concat(extractLESS.extract(["css-loader", "less-loader"]))
            }
        ]
    },

    plugins: [
        vendorLESS,
        extractLESS,
        new webpack.ProvidePlugin({ $: "jquery", jQuery: "jquery", JL: "jsnlog", Sly: "sly" }), // Maps these identifiers to the jQuery package (because Bootstrap expects it to be a global variable)
        // Workaround for angular/angular#11580 for angular v4
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            helpers.root("./app"), // location of your src
            {} // a map of your routes
        ),

        new webpack.optimize.CommonsChunkPlugin({
            //order is important: 
            //The CommonsChunkPlugin identifies the hierarchy among three chunks: app -> vendor -> polyfills. 
            //Where Webpack finds that app has shared dependencies with vendor, it removes them from app. 
            //It would remove polyfills from vendor if they shared dependencies, which they don't.
            name: ["app", "vendor", "polyfills"]
        }),
    ]
};