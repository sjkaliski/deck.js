var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , mongoose = require('mongoose');

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
  mongoose.connect('mongodb://david:bellarmine@alex.mongohq.com:10070/ferrisclothiers');
});

app.configure('development', function(){
  app.use(express.errorHandler());
});




var cardValues = ["A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2"];
var cardSuites = ["Heart", "Spade", "Club", "Diamond"];

var Card = mongoose.model('Card', new mongoose.Schema({
  value: {type: String, trim: true, required: true, enum: cardValues},
  suite: {type: String, trim: true, required: true, enum: cardSuites}
}));

var User = mongoose.model('User', new mongoose.Schema({
  name: {type: String, trim: true, required: true },
  cards: [Card]
}));

var Table = mongoose.model('Table', new mongoose.Schema({
  users: [User],
  cards: [Card]
}));



app.get('/', routes.index);
app.get('/table/:id', routes.table);
app.get('/table/:id/:user', routes.user);

require('./lib/socket.io')(io);

server.listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});