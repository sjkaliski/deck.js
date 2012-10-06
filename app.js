// Dependencies
var express = require('express')
  , Routes = require('./routes')
  , http = require('http')
  , mongoose = require('mongoose');

// Create new app and server instance
var app = express()
  , server = http.createServer(app);

// Create new instance of socket.io
var io = require('socket.io').listen(server);
require('./lib/socket.io')(io);

// App configurations
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
  mongoose.connect('mongodb://localhost:27017/deckjs');
});

// Run server
server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

var routes = new Routes(io);

// Routes
app.get('/', routes.index);
app.get('/tables/create', routes.index);
app.get('/tables/:table_id', routes.index);
app.get('/tables/:table_id/join', routes.index);
app.get('/tables/:table_id/users/:user_id', routes.index);

app.get('/test', routes.test);

app.get('/api/tables', routes.getTables);
app.post('/api/tables', routes.postTable);

app.get('/api/tables/:id', routes.getTable);
app.put('/api/tables/:id', routes.putTable);

app.post('/api/tables/:id/users', routes.postUser);
