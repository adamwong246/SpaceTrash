var mongoose = require('mongoose');

// var GameStateInventorySchema = new mongoose.Schema({
//   payload: Object
// });

var GameStateDroneSchema = new mongoose.Schema({
  id: String,
  name: String,
  x: Number,
  y: Number,
  direction: Number
});

var GameStateShipSchema = new mongoose.Schema({
  id: String,
  name: String,
  matrix: Array
});

var UserStateSchema = new mongoose.Schema({
  shipsWithFogOfWar: Array, // {type: GameStateShipSchema},
  dronesWithRays: Array, // {type: GameStateDroneSchema},
  // inventoryOfKnownObjects: [GameStateInventorySchema],
});

var GameStateSchema = new mongoose.Schema({
  shipsWithoutFogOfWar: Array, // {type: GameStateShipSchema},
  dronesWithoutRays: Array, // {type: GameStateDroneSchema},
  // inventoryOfKnownObjects: [GameStateInventorySchema],
});

var SessionSchema = new mongoose.Schema({
  users: Array,
  chatLog: Array,
  name: String,
  userStates: Object, // {type: UserStateSchema},
  gameState: GameStateSchema
});

module.exports = mongoose.model('Session', SessionSchema);
