

import path from 'path';
import webpack from 'webpack';
import assign from 'object-assign';
import config from './webpack.config.base';

export default assign({},config,{
    entry:[

         path.join(__dirname, '../src/client/index.js')
    ],
    output: {
        path:path.join(__dirname, '../dest'),
        filename:"bundle.js",
        publicPath:path.join(__dirname, '../'),
    },
    devtool: "source-map",

    plugins:[
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({minimize: true})
    ]

});
