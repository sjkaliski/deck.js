var mongoose = require('mongoose');
var TableSchema = require('../schema/table');

module.exports = mongoose.model('Table', TableSchema);