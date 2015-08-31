var Hapi = require('hapi');
var server = new Hapi.Server();
var handlebars = require('handlebars');
var path = require('path');
var Vision = require('vision');

server.register(Vision, function (err) {
  if (err) throw err;
});

server.views({
  helpersPath: path.join(__dirname, 'helpers'),
  engines: {
    html: handlebars
  },
  path: path.join(__dirname, 'templates')
});

server.connection({
  host: 'localhost',
  port: Number(process.argv[2])
});

server.route({
  path: '/',
  method: 'GET',
  handler: {
    view: 'index.html'
  }
});

server.start(function(){});