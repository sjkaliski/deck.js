var Table = require('../lib/models/table');
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
      res.json({
        success: true,
        data: docs
      });
    });
};

// Create new table
exports.postTable = function(req, res) {
  var t = new Table({ _id: req.body.id, users: req.body.users, cards: req.body.cards });
  t.save(function(err, doc){
    if(err) throw err;
    res.json({
      success: true,
      data: doc
    });
  });
};

// Get table by id
exports.getTable = function(req, res) {
  Table.findOne({_id: req.body.id}, function (err, doc){
    if(err) throw err;
    res.json(doc);
  });
};

// Put table
exports.putTable = exports.postUser = function(req, res) {
  Table.update({_id: body.req.id}, { name: req.body.name, users: req.body.users, cards: req.body.cards }, { upsert: true }, function(err, doc) {
    if(err) throw err;
    res.json({
      success: true,
      data: doc
    });
  });
};