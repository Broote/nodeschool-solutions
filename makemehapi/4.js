var Hapi = require('hapi');
var server = new Hapi.Server();
var Inert = require('inert');
var path = require('path');

server.connection({
  host: 'localhost',
  port: Number(process.argv[2])
});

server.register(Inert, function(e){
  if(e) throw e;
});

server.route({
  path: '/foo/bar/baz/{path}',
  method: 'GET',
  handler: {
      directory: { path: path.join(__dirname, './public') }
  }
});

server.start(function(){});