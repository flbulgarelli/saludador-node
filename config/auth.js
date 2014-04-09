var local = require('passport-local');

var usuarios = {
  jose: { username: 'jose', password: 'jose' },
  pedro: { username: 'pedro', password: 'pedro' },
  maria: { username: 'maria', password: 'maria' },
  andrea: { username: 'andrea', password: 'andrea' }
}

function obtenerUsuario(username) {
  return usuarios[username];
}

function credencialesValidas(username, password) {
  var usuario = obtenerUsuario(username);
  return usuario && usuario.password == password
}

module.exports = function(app, passport) {
  passport.use(new local.Strategy(
      function(username, password, done) {
        if (credencialesValidas(username, password)) {
          return done(null, obtenerUsuario(username))
        } else {
          return done(new Error("usuario o contraseña invalido"), false)
        }
      }
  ));

  passport.serializeUser(function(user, done) {
    done(null, user.username);
  });

  passport.deserializeUser(function(username, done) {
    if (obtenerUsuario(username)) {
      done(null, obtenerUsuario(username));
    } else {
      done(new Error("Usuario invalido"), false)
    }
  });

  app.use(passport.initialize());
  app.use(passport.session());
}
