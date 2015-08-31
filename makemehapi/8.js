var Hapi = require('hapi');
var server = new Hapi.Server();
var fs = require('fs');
var rot13 = require('rot13-transform');
var path = require('path');

server.connection({
  host: 'localhost',
  port: Number(process.argv[2])
});

server.route({
  path: '/',
  method: 'GET',
  handler: function(request, reply) {
    var text = fs.createReadStream(path.join(__dirname, 'textfile'));
    reply(text.pipe(rot13()))
  }
});

server.start(function(){});