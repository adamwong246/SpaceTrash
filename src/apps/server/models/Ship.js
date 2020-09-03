var mongoose = require('mongoose');

var ShipSchema = new mongoose.Schema({
  name: String,
  shipMap: Object,
  drones: {}
}, {
  usePushEach: true
});

module.exports = mongoose.model('Ship', ShipSchema);
