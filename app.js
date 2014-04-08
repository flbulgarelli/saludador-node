var express = require('express');
var saludador = require('./models/saludador');

var app = express();
app.use(app.router);

app.get('/saludo', function (req, res) {
  res.send('<html><head><title>Hola Express</title></head><body><h1>Página de Bienvenida</h1><p>' + saludador.saludar(req.query.nombre) + '</p></body></html>');
});
app.get('/despedida', function (req, res) {
  res.send('<html><head><title>Hola Express</title></head><body><h1>Página de Despedida</h1><p>' + saludador.despedir(req.query.nombre) + '</p></body></html>');
});


var server = app.listen(8080, function () {
  console.log('Servidor iniciado');
});
