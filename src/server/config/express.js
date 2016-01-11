/**
 * express配置
 */
import fs from 'fs';
import express from 'express';

import glob from 'glob';
import mongoose from 'mongoose';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import compress from 'compression';
import session from 'express-session';
import ConnectMongo from 'connect-mongo';
import methodOverride from 'method-override';


const accessLog = fs.createWriteStream('access.log', {flags: 'a'});
const errorLog = fs.createWriteStream('error.log', {flags: 'a'});
const mongoStore = new ConnectMongo(session);
export default  function (app, config) {

    const env = process.env.NODE_ENV || 'development';
    app.locals.ENV = env;
    app.locals.ENV_DEVELOPMENT = env == 'development';
    //favicon图标

    // app.use(favicon(config.root + '/public/img/favicon.ico'));
    app.use(logger('dev'));
    app.use(logger({stream: accessLog}));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(compress());
    app.use(express.static(config.root + '/public'));
    app.use(methodOverride());

    app.use(cookieParser());
    app.use(session({
        resave: false,
        saveUninitialized: true,
        secret: config.cookieSecret,
        store:new mongoStore({
            url:config.db,
            secret: config.cookieSecret,
        })
    }));
    const models = glob.sync(config.root + '/src/server/models/*.js');
    models.forEach(function (model) {
       require(model);
    });

    const controllers = glob.sync(config.root + '/src/server/controllers/*.js');

    controllers.forEach(function (controller) {
        require(controller)(app);
   });
    app.use(function (err, req, res, next) {
        const meta = '[' + new Date() + '] ' + req.url + '\n';
        errorLog.write(meta + err.stack + '\n');
        next();
    });
};
