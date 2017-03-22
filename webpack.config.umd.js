"use strict";
var webpack = require('webpack');
var path = require('path');
var angularExternals = require('webpack-angular-externals');
var rxjsExternals = require('webpack-rxjs-externals');
var pkg = require('./package.json');
exports.__esModule = true;
exports["default"] = {
    entry: {
        'ng-messenger.umd': path.join(__dirname, 'src', 'index.ts'),
        'ng-messenger.umd.min': path.join(__dirname, 'src', 'index.ts')
    },
    output: {
        path: path.join(__dirname, 'dist', 'bundles'),
        filename: '[name].js',
        libraryTarget: 'umd',
        library: 'ngMessenger'
    },
    externals: [
        angularExternals(),
        rxjsExternals()
    ],
    devtool: 'source-map',
    module: {
        rules: [{
                test: /\.ts$/,
                loader: 'tslint-loader?emitErrors=true&failOnHint=true',
                exclude: /node_modules/,
                enforce: 'pre'
            }, {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader?keepUrl=false', 'angular2-template-loader?keepUrl=false'],
                exclude: /node_modules/
            }, {
                test: /\.html$/,
                loader: 'html-loader?keepUrl=false',
                exclude: /node_modules/
            }, {
                test: /\.scss$/,
                exclude: /node_modules/,
                loaders: ['raw-loader?keepUrl=false', 'sass-loader?keepUrl=false'] // sass-loader not scss-loader
            }]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            sourceMap: true
        }),
        new webpack.ContextReplacementPlugin(/angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/, path.join(__dirname, 'src')),
        new webpack.BannerPlugin({
            banner: ("\n/**\n * " + pkg.name + " - " + pkg.description + "\n * @version v" + pkg.version + "\n * @author " + pkg.author + "\n * @link " + pkg.homepage + "\n * @license " + pkg.license + "\n */\n      ").trim(),
            raw: true,
            entryOnly: true
        })
    ]
};
//# sourceMappingURL=webpack.config.umd.js.map