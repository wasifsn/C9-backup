var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var userSchema = new mongoose.Schema({
    username: String,
    passwors: String
});

userSchema.plugin(passportLocalMongoose)
module.exports = mongoose.model('User', userSchema);