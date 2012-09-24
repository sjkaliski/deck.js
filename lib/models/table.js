var mongoose = require('mongoose')
  , User = require('./user')
  , Card = require('./card');

module.exports = mongoose.model('Table', new mongoose.Schema({
  users: [User],
  cards: [Card]
}));