"use strict";

var webpack = require('webpack');
var env = process.env.NODE_ENV;
var config =  {
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015','stage-0','react']
                }
            }
        ]
    },
    output: {
        library: 'redux-trace',
        libraryTarget: 'umd'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(env)
        })
    ]
};
module.exports = config;
