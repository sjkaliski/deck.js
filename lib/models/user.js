var mongoose = require('mongoose')
  , Card = require('./card');

module.exports = mongoose.model('User', new mongoose.Schema({
  name: { type: String, required: true },
  cards: [Card]
}));
