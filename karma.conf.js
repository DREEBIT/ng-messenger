"use strict";
var webpack = require('webpack');
var path = require('path');
exports.__esModule = true;
exports["default"] = function (config) {
    config.set({
        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: './',
        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],
        // list of files / patterns to load in the browser
        files: [
            { pattern: './test/entry.ts', watched: false }
        ],
        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'test/entry.ts': ['webpack', 'sourcemap']
        },
        webpack: {
            resolve: {
                extensions: ['.ts', '.js'],
                alias: {
                    sinon: 'sinon/pkg/sinon'
                }
            },
            module: {
                rules: [{
                        test: /\.ts$/,
                        loader: 'tslint-loader',
                        exclude: /node_modules/,
                        enforce: 'pre'
                    }, {
                        test: /\.ts$/,
                        loaders: ['awesome-typescript-loader', 'angular2-template-loader?keepUrl=true'],
                        exclude: /node_modules/
                    }, {
                        test: /\.html$/,
                        use: [{
                                loader: 'html-loader',
                                options: {
                                    minimize: true
                                }
                            }]
                    }, {
                        test: /sinon.js$/,
                        loader: 'imports-loader?define=>false,require=>false'
                    }, {
                        test: /src\/.+\.ts$/,
                        exclude: /(node_modules|\.spec\.ts$)/,
                        loader: 'istanbul-instrumenter-loader',
                        enforce: 'post'
                    }, {
                        test: /\.scss$/,
                        use: [{
                                loader: "style-loader" // creates style nodes from JS strings
                            }, {
                                loader: "css-loader" // translates CSS into CommonJS
                            }, {
                                loader: "sass-loader" // compiles Sass to CSS
                            }]
                    }]
            },
            plugins: [
                new webpack.SourceMapDevToolPlugin({
                    filename: null,
                    test: /\.(ts|js)($|\?)/i
                }),
                new webpack.LoaderOptionsPlugin({
                    options: {
                        tslint: {
                            emitErrors: config.singleRun,
                            failOnHint: false
                        }
                    }
                }),
                new webpack.ContextReplacementPlugin(/angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/, path.join(__dirname, 'src'))
            ].concat((config.singleRun ? [new webpack.NoEmitOnErrorsPlugin()] : []))
        },
        coverageIstanbulReporter: {
            reports: ['text-summary', 'html', 'lcovonly'],
            fixWebpackSourcePaths: true
        },
        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'coverage-istanbul', 'kjhtml'],
        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,
        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],
        phantomjsLauncher: {
            // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
            exitOnResourceError: true
        }
    });
};
//# sourceMappingURL=karma.conf.js.map