var Hapi = require('hapi');
var server = new Hapi.Server();
var Joi = require('joi');

server.connection({
  host: 'localhost',
  port: Number(process.argv[2] || 8080)
});

server.route({
  path: '/upload',
  method: 'POST',
  config: {
    handler: function (request, reply) {
      var body = '';
      request.payload.file.on('data', function (data) {
        body += data
      });
      request.payload.file.on('end', function () {
        console.log(request.payload.file.hapi.filename);
        console.log(request.payload.description);
        console.log(22222);
        reply({
          description: request.payload.description,
          file: {
            data: body,
            filename: request.payload.file.hapi.filename,
            headers: request.payload.file.hapi.headers
          }
        })
      });
    },
    payload: {
      output: 'stream',
      allow: 'multipart/form-data',
      parse: true
    }
  }
});

server.start(function(){});