/**
 * 基础配置
 */
'use strict'

import path from 'path';
import webpack from 'webpack';
const srcRoot = path.join(__dirname, '../src');
const nodeRoot = path.join(__dirname, '../node_modules');
const publicRoot = path.join(__dirname, '../public');
export default {

    resolve: {
        root: [srcRoot, nodeRoot,publicRoot],
        extensions: ['', '.js', '.jsx', '.css']
    },

    module: {
        loaders: [

            {
              test: /\.js/,
              loader: 'babel',
              exclude: /node_modules/,
              query:{
                  stage:0,
                  plugins: ['react-transform'],
                  extra:{
                      'react-transform': {
                          transforms: [{
                              transform: 'react-transform-hmr',
                              imports:   ['react'],
                              locals:    ['module']
                          },{
                              transform: 'react-transform-catch-errors',
                              imports: ['react','redbox-react' ]
                          }]
                      }
                  }
             }
            }
          , { test: /\.css$/, loader: 'style-loader!css-loader!autoprefixer-loader' }
          , { test: /\.scss$/, loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader' }
          , { test: /\.(ttf|eot|svg|woff|woff2)?$/, loader: "file-loader?name=[hash:8].[name].[ext]" }
          , { test: /\.(png|gif)$/, loader: "file-loader?name=../../images/[hash:8].[name].[ext]" }

        ]
    }
}



