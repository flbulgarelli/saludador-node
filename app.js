var express = require('express');
var saludador = require('./controllers/saludador-controller');

var app = express();
app.use(app.router);

app.get('/saludo', saludador.saludo);
app.get('/despedida', saludador.despedida);

var server = app.listen(8080, function() {
  console.log('Servidor iniciado');
});
