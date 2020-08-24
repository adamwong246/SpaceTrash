var mongoose = require('mongoose');

var SessionSchema = new mongoose.Schema({
  users: Array,
  chatLog: Array,
  name: String,
  // // userStates: Object, // {type: UserStateSchema},
  // gameState: {
  //   shipsWithoutFogOfWar: Array,
  //   dronesWithoutRays: Array
  // } // GameStateSchema
});

module.exports = mongoose.model('Session', SessionSchema);
