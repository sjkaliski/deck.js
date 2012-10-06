var Table = require('../lib/models/table');
var User = require('../lib/models/user');
var cardsEnum = require('../lib/cards-enum');

// Render home page
exports.index = function(req, res) {
  res.render('index', { title: 'Deck.js' });
};

// Run client side tests
exports.test = function(req, res) {
  res.render('mocha');
};

// Get all tables
exports.getTables = function(req, res) {
  var result = {};
  Table.find({}, function(err, docs){
      res.json(docs);
    });
};

// Create new table
exports.postTable = function(req, res) {
  var allCards = [];
  for (var i = 0; i < cardsEnum.values.length; i++) {
    for (var j = 0; j < cardsEnum.suits.length; j++) {
      allCards.push({ value: cardsEnum.values[i], suit: cardsEnum.suits[j] });
    }
  }

  var t = new Table({ name: req.body.name, users: [], cards: allCards });
  t.save(function(err, doc){
    if(err) throw err;
    res.json(doc);
  });
};

// Get table by id
exports.getTable = function(req, res) {
  Table.findOne({_id: req.params.id}, function (err, doc){
    if(err) throw err;
    res.json(doc);
  });
};

// Update table
exports.putTable = function(req, res) {
  Table.update({_id: req.params.id}, { name: req.body.name, users: req.body.users, cards: req.body.cards }, { upsert: true }, function(err, doc) {
    if(err) throw err;
    res.json(doc);
  });
};

// Create a user
exports.postUser = function(req, res) {
  var u = new User({ name: req.body.name });
  u.save(function(err, doc) {
    if(err) throw err;
    res.json(doc);
  })
};
