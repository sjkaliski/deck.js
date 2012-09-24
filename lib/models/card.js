var mongoose = require('mongoose');

var cardValues = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2']
  , cardSuits = ['Heart', 'Spade', 'Club', 'Diamond']
  , allCards = [];

for (var i = 0; i < cardValues.length; i++) {
  for (var j = 0; j < cardSuits.length; j++) {
    allCards.push({
      value: cardValues[i],
      suit: cardSuits[j]
    });
  }
}

module.exports = mongoose.model('Card', new mongoose.Schema({
  value: { type: String, trim: true, required: true, enum: cardValues },
  suit: { type: String, trim: true, required: true, enum: cardSuits },
  isVisible: { type: Boolean, default: false }
}));