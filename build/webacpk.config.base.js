/**
 * Created by may on 02/03/2017.
 */
'use strict';

//hash is calculated for a build,
// chunkhash is calculated for chunk (entry file),
// contenthash is special hash generated in ExtractTextPlugin and is calculated by extracted content, not by whole chunk content

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function webpackConfig(env) {

    return  {
        /*context: __dirname,
         output: {
         path: path.join(__dirname, '../dist'),
         publicPath: '/',
         filename: '[name].js'
         },*/
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    options: {
                        //vue-loader options go here
                    }
                },
                {
                    test: /\.(jsx?|babel|es6|js)$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                    query: {
                        presets: ['es2015']
                    }
                },
                {
                    test: /\.(png|jpg|gif|svg)$/,
                    loader: 'file-loader',
                    options: {
                        name: (env === 'dev') ? 'images/[name].[ext]' : 'images/[name]-[hash:8].[ext]'
                    }
                },
                {
                    test: /\.otf|ttf|woff2?|eot(\?\S*)?$/,
                    loader: 'url-loader',
                    query: {
                        name: (env === 'dev') ? 'fonts/[name].[ext]' : 'fonts/[name]-[hash:8].[ext]'
                    }
                }
            ]
        },
        plugins : [
            /*new HtmlWebpackPlugin({
                filename: 'index.html',
                chunks: ['index'],
                template: '../template/default.html',
                inject: false
            })*/
        ]
        /*performance: {
         hints: (process.env.NODE_ENV === 'production')
         },*/

        //排除vue文件 单独加载
        /* externals : {
         vue: {
         root: 'Vue',
         commonjs: 'vue',
         commonjs2: 'vue',
         amd: 'vue'
         }
         },*/
    }
}
module.exports = webpackConfig;

