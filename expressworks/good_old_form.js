var express = require('express');
var app = express();
var bodyparser = require('body-parser')

app.use(bodyparser.urlencoded({extended: false}));

app.post('/form', function(req, res){
  var text = req.body.str.split('').reverse().join('');
  //console.log(text);
  res.end(text);
});

app.listen(process.argv[2]);