var Hapi = require('hapi');
var server = new Hapi.Server();
var Boom = require('boom');

server.connection({
  host: 'localhost',
  port: Number(process.argv[2] || 8080)
});

server.state('session', {
  ttl: 10,
  path: '/',
  domain: 'localhost',
  encoding: 'base64json'
});

server.route({
  path: '/set-cookie',
  method: 'GET',
  handler: function(request, reply) {
    console.log(request.path);
    reply('success').state('session', { key: 'makemehapi' });
  },
  config: {
    state: {
      parse: true,
      failAction: 'log'
    }
  }
});

server.route({
  path: '/check-cookie',
  method: 'GET',
  handler: function(request, reply) {
    console.log(request.path);
    var session = request.state.session;
    console.log(session);
    if (session) {
      reply({user: 'hapi'});
    } else {
      reply(Boom.unauthorized('Missing authentication'));
    }
  }
});

server.start(function(){});