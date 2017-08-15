var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var helpers = require("./helpers");

//AoT not working yet!!
const AotPlugin = require('@ngtools/webpack').AotPlugin;

const extractLESS = new ExtractTextPlugin("app.less.css");
const vendorLESS = new ExtractTextPlugin("[name].less.css");

module.exports = {

    entry: require('./entry.jit'),

    resolve: {
        extensions: [".ts", ".js", ".less"]
    },

    devtool: "source-map",

    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: '@ngtools/webpack'
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

    output: {
        path: helpers.root("dist"),
        publicPath: "/",
        filename: "[name].js",
        chunkFilename: "[id].chunk.js"
    },

    plugins: [
        vendorLESS,
        extractLESS,
        new webpack.ProvidePlugin({ $: "jquery", jQuery: "jquery", JL: "jsnlog", sly: "sly", moment: "moment" }), // Maps these identifiers to the jQuery package (because Bootstrap expects it to be a global variable)
        // Workaround for angular/angular#11580 for angular v4
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            helpers.root("./app"), // location of your src
            {} // a map of your routes
        ),
        new webpack.ContextReplacementPlugin(/moment[\\\/]locale$/, /^\.\/(en|de)$/), //install only 'en' & 'de' locales with momentjs --> saves about 500kb!

        new webpack.optimize.CommonsChunkPlugin({
            //order is important: 
            //The CommonsChunkPlugin identifies the hierarchy among three chunks: app -> vendor -> polyfills. 
            //Where Webpack finds that app has shared dependencies with vendor, it removes them from app. 
            //It would remove polyfills from vendor if they shared dependencies, which they don't.
            name: ["app", "vendor", "polyfills"]
        }),
        new AotPlugin({
            tsConfigPath: helpers.root("tsconfig.json"),
            entryModule: helpers.root("app","app.module.ts")
        })
        //new webpack.NoEmitOnErrorsPlugin(),
        //new webpack.optimize.UglifyJsPlugin({ // https://github.com/angular/angular/issues/10618
        //    mangle: {
        //        keep_fnames: true
        //    }
        //}),        
        //new webpack.DefinePlugin({
        //    "process.env": {
        //        "ENV": JSON.stringify(ENV)
        //    }
        //}),
        //new webpack.LoaderOptionsPlugin({
        //    htmlLoader: {
        //        minimize: false // workaround for ng2
        //    }
        //})
    ]
};

