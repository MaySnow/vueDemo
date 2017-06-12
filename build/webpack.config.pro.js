/**
 * Created by may on 02/03/2017.
 */
'use strict';
const baseConfig = require('./webacpk.config.base')('pro');
const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


baseConfig.plugins = baseConfig.plugins.concat([
    new ExtractTextPlugin({
        filename: 'css/[name]-[contenthash:7].css',
        allChunks: true
    }),
    new webpack.optimize.UglifyJsPlugin({
        sourceMap: false,
        output: {comments: false},
        compress: {
            warnings: false,
            drop_console: true
        }
    }),
    new webpack.LoaderOptionsPlugin({
        minimize: true
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ManifestPlugin({
        fileName: 'hashManifest.json',
        publicPath: '/'
    }),
    new webpack.NoEmitOnErrorsPlugin()
]);

baseConfig.module.rules = baseConfig.module.rules.concat(
    {
        test: /\.(css|scss)$/,
        //loaders: ['style-loader', 'css-loader','sass-loader']
        loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader!sass-loader'
        })
    });

baseConfig.resolve = {
    alias: {
        'vue$': 'vue/dist/vue.min.js'
    }
};

module.exports = baseConfig;