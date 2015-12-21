require('babel/register');
const appEnv = process.env.NODE_ENV;
if(appEnv === "development" ){
    module.exports = require('./webpack/webpack.config.development');
}else if(appEnv === "production" ){
    module.exports = require('./webpack/webpack.config.production');
}else{
   module.exports = require('./webpack/webpack.config.development');
}
