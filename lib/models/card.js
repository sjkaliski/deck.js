var mongoose = require('mongoose');
var CardSchema = require('../schema/card');
var cards = require('../cards-enum');

module.exports = mongoose.model('Card', CardSchema);
