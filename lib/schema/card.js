var mongoose = require('mongoose');
var cards = require('../cards-enum');

module.exports = new mongoose.Schema({
  value: { type: String, trim: true, required: true, enum: cards.values },
  suit: { type: String, trim: true, required: true, enum: cards.suits },
  isVisible: { type: Boolean, default: true }
});
