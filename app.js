var express = require('express');
var routes =  require('./config/routes');

var app = express();
app.use(app.router);

routes(app);

var server = app.listen(8080, function() {
  console.log('Servidor iniciado');
});
