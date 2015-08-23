var Hapi = require('hapi');
var server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: Number(process.argv[2])
});

var handler = function(req, res){
  res('Hello Hapi');
}

server.route({path: '/', method: 'GET', handler: handler})

server.start(function () {
  console.log('started on', server.info.uri);
});