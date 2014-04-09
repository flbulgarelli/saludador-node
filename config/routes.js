var passport = require('passport')
var auth = require('../controllers/auth-controller');
var home = require('../controllers/home-controller');
var saludador = require('../controllers/saludador-controller');

module.exports = function(app) {
  app.get('/', home.index);
  app.get('/saludo', saludador.saludo);
  app.get('/despedida', saludador.despedida);
  app.get('/login', auth.login)
  app.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
  }));
}

