'use strict';

var webpack = require('webpack');
var baseConfig = require('../webpack.config');
var config = Object.create(baseConfig);

config.plugins = [
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production'),
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    },
  }),
];

module.exports = config;
