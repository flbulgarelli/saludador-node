var saludador = require('../models/saludador');

module.exports = {
  saludo: function(req, res) {
    res.render('saludo', { mensaje: saludador.saludar(req.query.nombre) } );
  },
  despedida: function(req, res) {
    res.render('despedida', { mensaje: saludador.despedir(req.query.nombre) } );
  }
}
