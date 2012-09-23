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
  mongoose.connect('mongodb://localhost:27017/deckdev');
  //mongoose.connect('mongodb://eboard:shipping@alex.mongohq.com:10070/ferrisclothiers');
});

app.configure('development', function(){
  app.use(express.errorHandler());
});




var cardValues = ["A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2"];
var cardSuites = ["Heart", "Spade", "Club", "Diamond"];

var Card = new mongoose.Schema({
  value: {type: String, trim: true, required: true, enum: cardValues},
  suite: {type: String, trim: true, required: true, enum: cardSuites}
});

var User = new mongoose.Schema({
  name: { type: String, required: true },
  cards: [Card]
});

var Table = mongoose.model('Table', new mongoose.Schema({
  name: { type: String, required: true },
  users: [User],
  cards: [Card]
}));



app.get('/', function(req, res) {
  res.render('index', { title: 'Deck.js' });
});

app.post('/table/create', function(req, res){
  //creates a new table and redirect you to that table
  var table = new Table({ users:[], name: req.body.name });
  table.save(function(err, doc){
    var result = {};
    if(err) {
      result = { success: false, err: err };
    } else {
      result = { success: true, id: doc._id };
    }
    res.json(result);
  });
});

app.get('/table/:id', function(req, res) {
  Table.findById(req.params.id, function(err, doc){
    res.send(doc.name);
  });
});

app.post('/table/:id/user/create', function(req, res){

  Table.findById(req.params.id, function(err, table){
    var result = {};
    if(err){
      result = {
        success: false,
        err: err
      };
    } else {
      table.users.push({name: req.body.name});
      result = {
        success: true,
        err: err
      };
    }
    res.json(result);
  });
});


require('./lib/socket.io')(io);

server.listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});