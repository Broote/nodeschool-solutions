var Hapi = require('hapi');
var server = new Hapi.Server();
var Inert = require('inert');
var path = require('path');

server.connection({
  host: 'localhost',
  port: Number(process.argv[2])
});

server.register(Inert, function(e) {
  if (e) throw e;
});

var handleStatic = {
  file: path.join(__dirname, 'index.html')
};

server.route({
  path: '/',
  method: 'GET', 
  handler: handleStatic
});

server.start(function(){});