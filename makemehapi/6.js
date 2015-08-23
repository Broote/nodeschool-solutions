var Hapi = require('hapi');
var server = new Hapi.Server();
var h2o2 = require('h2o2');

server.register(h2o2, function(err) {
  if (err) throw err;
});

server.connection({
  host: 'localhost',
  port: Number(process.argv[2])
});

server.route({
  path: '/proxy',
  method: 'GET',
  handler: {
    proxy: {
      host: '127.0.0.1',
      port: 65535
    }
  }
});

server.start(function(){});