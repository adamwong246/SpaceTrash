var mongoose = require('mongoose');

var DroneSchema = new mongoose.Schema({
  name: String,
  x: Number,
  y: Number,
  direction: Number,
  ship: String,
  user: String
});

module.exports = mongoose.model('Drone', DroneSchema);
