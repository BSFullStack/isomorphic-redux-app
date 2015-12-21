//开发环境

import path from 'path';
import webpack from 'webpack';
import assign from 'object-assign';
import config from './webpack.config.base';

export default assign({},config,{
    entry:[
        'webpack-hot-middleware/client?reload=true',
         path.join(__dirname, '../src/client')
    ],
    plugins:[
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),

        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('developmonent')
            }
        })
    ],
    output: {
        path: path.join(__dirname, '../public')

    }
});
