var mongoose = require('mongoose');

var SessionSchema = new mongoose.Schema({
  user: String,
  ship: String,

});

module.exports = mongoose.model('Session', SessionSchema);
