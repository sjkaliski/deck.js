var express = require('express')
  , routes = require('./routes')
  , http = require('http');

var app = express()
  , server = http.createServer(app);

var io = require('socket.io').listen(server);

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/table/:id', routes.table);
app.get('/table/:id/:user', routes.user);

require('./lib/socket.io')(io);

server.listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});