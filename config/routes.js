var home = require('../controllers/home-controller');
var saludador = require('../controllers/saludador-controller');

module.exports = function(app) {
  app.get('/', home.index);
  app.get('/saludo', saludador.saludo);
  app.get('/despedida', saludador.despedida);
}

