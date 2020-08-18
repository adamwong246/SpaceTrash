var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var SessionSchema = new Schema({
    users: Array,
    chatLog: Array,
    name: String
});

module.exports = mongoose.model('Session', SessionSchema);
