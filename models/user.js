// Work off of this code to make user/auth functionality: https://github.com/sf-wdi-19-20/w4_review_workout_app/blob/master/public/scripts/profile.js
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: String, // WILL BE OBJECT; string for testing purposes
  email: String, 
  password: String // MAKE INACCESSIBLE AND HIDDEN AND ENCRYPTED AND SECRET
});

var Report = mongoose.model('Report', ReportSchema);

module.exports = Report;