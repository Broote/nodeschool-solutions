var express = require('express');
var app = express();
var fs = require('fs');


file = process.argv[3];

app.get('/books', function(req, res){
  fs.readFile(file, function(err, data){
    obj = JSON.parse(data);
    res.json(obj);
  });
});

app.listen(process.argv[2]);