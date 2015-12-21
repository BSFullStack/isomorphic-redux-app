/**
 * 数据库
 */
var path = require('path'),
    rootPath = path.normalize(__dirname + '/../../..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'webcy'
    },
    port: 3000,
    db: 'mongodb://localhost/webcy-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'webcy'
    },
    port: 3000,
    db: 'mongodb://localhost/webcy-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'webcy'
    },
    port: 3000,
    db: 'mongodb://localhost/webcy-production'
  }
};

module.exports = config[env];
