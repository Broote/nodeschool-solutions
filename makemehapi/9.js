var Hapi = require('hapi');
var server = new Hapi.Server();
var Joi = require('joi');

server.connection({
  host: 'localhost',
  port: Number(process.argv[2] || 8080)
});

server.route({
  path: '/chickens/{breed}',
  method: 'GET',
  handler: function(request, reply) {
    console.log(request.path);
    reply('You asked for the chicken ' + request.params.breed);
  },
  config: {
    validate: {
      params: {
        breed: Joi.string().required()
      }
    }
  }
});

server.start(function(){});