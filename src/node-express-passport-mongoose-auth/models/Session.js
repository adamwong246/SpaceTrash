var mongoose = require('mongoose');

var SessionSchema = new mongoose.Schema({
    users: Array,
    chatLog: Array,
    name: String,
    userStates: Object,
});

module.exports = mongoose.model('Session', SessionSchema);
