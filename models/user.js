// Work off of this code to make user/auth functionality: https://github.com/sf-wdi-19-20/w4_review_workout_app/blob/master/public/scripts/profile.js
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: String, // when created, check no identical username exists.
  email: String, // when created, check no identical username exists.
  password: String // MAKE INACCESSIBLE AND HIDDEN AND ENCRYPTED AND SECRET; require input twice when created; show dots instead of characters while typing
});

var User = mongoose.model('User', UserSchema);

module.exports = User;