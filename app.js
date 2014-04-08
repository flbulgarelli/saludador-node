var http = require('http');

http.createServer(function(req, res) { 
  res.write("<html><head><title>Hola node</title></head><body>Hola Mundo!</body></html>"); 
  res.end(); 
}).listen(8080);

console.log("Servidor iniciado")
