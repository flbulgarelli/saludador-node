var http = require('http');
var url = require('url');

var saludador = {
  saludar: function(nombre) {
   return "Hola " + nombre + "!";   
  }
}

http.createServer(function(req, res) { 
  var query = url.parse(req.url, true).query;
  res.write("<html><head><title>Hola node</title></head><body>"+saludador.saludar(query.nombre)+"</body></html>"); 
  res.end(); 
}).listen(8080);

console.log("Servidor iniciado")
