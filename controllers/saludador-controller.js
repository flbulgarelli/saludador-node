var saludador = require('../models/saludador');

module.exports = {
  saludo: function(req, res) {
    res.send('<html><head><title>Hola Express</title></head><body><h1>Página de Bienvenida</h1><p>' + saludador.saludar(req.query.nombre) + '</p></body></html>');
  },
  despedida: function(req, res) {
    res.send('<html><head><title>Hola Express</title></head><body><h1>Página de Despedida</h1><p>' + saludador.despedir(req.query.nombre) + '</p></body></html>');
  }
}
