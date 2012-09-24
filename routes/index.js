// Render home page
exports.index = function(req, res) {
  res.render('index', { title: 'Deck.js' });
}

// Run client side tests
exports.test = function(req, res) {
  res.render('mocha');
}

// Get all tables
exports.getTables = function(req, res) {
  res.json([{
    _id: '1'
  , users: [{
      _id: '1'
    , cards: []
    }]
  , cards: allCards
  }]);
}

// Create new table
exports.postTable = function(req, res) {
  res.json([{
    _id: '1'
  , users: [{
      _id: '1'
    , cards: []
    }]
  , cards: allCards
  }]);
}

// Get table by id
exports.getTable = function(req, res) {
  res.json([{
    _id: '1'
  , users: [{
      _id: '1'
    , cards: []
    }]
  , cards: allCards
  }]);
}

// Put table
exports.putTable = function(req, res) {
  res.json({
    _id: '1'
  , users: [{
      _id: '1'
    , cards: [{
        _id: '1'
      , value: '2'
      , suit: 'Heart'
      }]
    }],
    cards: allCards
  });
}

// Create new table specific user
exports.postUser = function(req, res) {
  res.json({
    _id: '1'
  , cards: []
  });
};