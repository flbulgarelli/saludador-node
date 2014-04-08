var saludador = require('../models/saludador');

module.exports = {
  saludo: function(req, res) {
    res.send('<html><head><title>Hola Express</title></head><body>' + saludador.saludar(req.query.nombre) + '</body></html>');
  },
  despedida: function(req, res) {
    res.send('<html><head><title>Hola Express</title></head><body>' + saludador.despedir(req.query.nombre) + '</body></html>');
  }
}

