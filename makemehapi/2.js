var Hapi = require('hapi');
var server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: Number(process.argv[2])
});

var handler = function(req, res) {
  res('Hello ' + req.params.name)
};

server.route({
  path: '/{name}',
  method: 'GET',
  handler: handler
});

server.start(function(){
});