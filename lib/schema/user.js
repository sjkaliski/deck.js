var mongoose = require('mongoose')
  , Card = require('./card');

module.exports = new mongoose.Schema({
  name: { type: String, required: true },
  cards: [Card]
});
