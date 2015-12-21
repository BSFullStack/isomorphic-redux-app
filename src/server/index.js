require('babel/register')
var config = require('./config/config');
var server = require('./server')(config);
server.listen(config.port, function () {
  console.log('服务器启动成功！端口号： ' + config.port);
});
