var express = require('express');
var routes =  require('./config/routes');
var handlebars = require('express3-handlebars');
var path = require('path');

var app = express();
app.use(app.router);

routes(app);

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars({}));
app.set('view engine', 'handlebars');


var server = app.listen(8080, function() {
  console.log('Servidor iniciado');
});
