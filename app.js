// Dependencies
var express = require('express')
  , routes = require('./routes')
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
  mongoose.connect('mongodb://eboard:shipping@alex.mongohq.com:10070/ferrisclothiers');
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

// Run server
server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

// Routes
app.get('/', routes.index);
app.get('/test', routes.test);

app.get('/api/tables', routes.getTables);
app.post('/api/tables', routes.postTable);

app.get('/api/tables/:id', routes.getTable);
app.put('/api/tables/:id', routes.putTable);

app.post('/api/tables/:id/users', routes.postUser);
