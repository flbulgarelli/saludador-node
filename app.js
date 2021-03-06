var path = require('path');
var express = require('express');
var handlebars = require('express3-handlebars');

var passport = require('passport');
var routes =  require('./config/routes');
var auth = require('./config/auth')

var app = express();

app.use(express.cookieParser());
app.use(express.bodyParser());
app.use(express.session({ secret: 'keyboard cat' }));
auth(app, passport);

app.use(app.router);
routes(app);

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

var server = app.listen(8080, function() {
  console.log('Servidor iniciado');
});
