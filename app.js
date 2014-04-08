var express = require('express');
var saludador = require('./models/saludador');

var app = express();
app.use(app.router);

app.get('/', function (req, res) {
  res.send('<html><head><title>Hola Express</title></head><body>' + saludador.saludar(req.query.nombre) + '</body></html>');
});

var server = app.listen(8080, function () {
  console.log('Servidor iniciado');
});
