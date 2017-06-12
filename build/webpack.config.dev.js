/**
 * Created by may on 02/03/2017.
 */
'use strict';
const baseConfig = require('./webacpk.config.base')('dev');
const webpack = require('webpack');

baseConfig.plugins = baseConfig.plugins.concat([
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
]);

baseConfig.devtool = '#source-map';

baseConfig.module.rules = baseConfig.module.rules.concat(
    {
        test: /\.(css|scss)$/,
        loaders: ['style-loader', 'css-loader','sass-loader']
    });

baseConfig.resolve = {
    alias: {
        'vue$': 'vue/dist/vue.js'
    }
};
module.exports = baseConfig;