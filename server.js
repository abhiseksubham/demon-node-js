var express = require('express');
var http = require('http');

var app = express();
var server = http.createServer(app);


app.get('/', function(req,res){
  res.send("Hello World");
});


server.listen(8080, function(){
  console.log("server is listening on port: 3000");
});
