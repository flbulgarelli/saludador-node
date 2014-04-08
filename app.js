var http = require('http');
var url = require('url');

http.createServer(function(req, res) { 
  var query = url.parse(req.url, true).query;
  res.write("<html><head><title>Hola node</title></head><body>Hola "+query.nombre+"!</body></html>"); 
  res.end(); 
}).listen(8080);

console.log("Servidor iniciado")
