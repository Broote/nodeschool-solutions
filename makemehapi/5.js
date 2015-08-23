var Hapi = require('hapi');
var server = new Hapi.Server();
var Vision = require('vision');
var path = require('path');
var handlebars = require('handlebars');

server.register(Vision, function (err) {
  if (err) throw err;
});

server.connection({
  host: 'localhost',
  port: Number(process.argv[2])
});

server.views({
  engines: {
    html: handlebars
  },
  path: path.join(__dirname, 'templates')
});

server.route({
  path: '/',
  method: 'GET',
  handler: {
    view: 'index.html'
  }
});

server.start(function(){});