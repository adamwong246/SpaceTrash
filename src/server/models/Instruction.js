var mongoose = require('mongoose');

var InstructionSchema = new mongoose.Schema({
  command: String,
  droneId: String,
  sessionId: String,
  timestamp: Date
});

module.exports = mongoose.model('Instruction', InstructionSchema);
