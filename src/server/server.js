import express from 'express' ;
import path from 'path';

export default function(config){

    //初始化express 应用
    var app = express();

    //数据库以及后台MVC
    require('./config/database')(app, config);
    //集成webpack运行环境
    require('./config/webpack')(app, config);
    //初始化express配置
    require('./config/express')(app, config);

    return app;
};
