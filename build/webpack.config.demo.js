/**
 * Created by may on 02/03/2017.
 */
'use strict';
const devConf = require('./webpack.config.dev');
const glob = require('glob');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


devConf.context = __dirname;
devConf.entry = {
    build : '../example/main.js'
};
devConf.output = {
    path: path.join(__dirname,'./dist'),
    publicPath: '/',
    filename: 'js/[name].js',
    chunkFilename: 'js/[id]-[name].js'
};

devConf.plugins = devConf.plugins.concat([
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: '../index.html'
    })
]);

devConf.devServer = {
    port: 3339,
    publicPath: '/',
    host: '0.0.0.0',
    hot: true,
    open: true
};

module.exports = devConf;