var mongoose = require('mongoose')
var UserSchema = require('../schema/user');

module.exports = mongoose.model('User', UserSchema);
