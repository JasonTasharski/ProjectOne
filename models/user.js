var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require('bcrypt'),
    salt = bcrypt.genSaltSync(10);

var UserSchema = new Schema({
  username: String, // when creating, check no identical username exists.
  email: String, // when creating, check no identical username exists. (Check validity when removing focus from input field; block if invalid) (Have the submit button do anything only if valid === true for each input field [username, email, password]) (make sure the email input is actually an email, and that the username input isn't an email)
  passwordH: String // MAKE INACCESSIBLE AND HIDDEN AND ENCRYPTED AND SECRET; require input TWICE (two fields; input must be identical) when created; show dots instead of characters while typing
  //avatar: String
});

UserSchema.statics.createSecure = function (userData, callback) { // Let's encrypt the password!
	var that = this; // "this" can mean many things in a nested array; sets "that" to THIS "this"
	bcrypt.genSalt(function (err,salt){
		bcrypt.hash(userData.password, salt, function (err, hash){
			console.log(hash); //password is stored as a hash
			that.create({
				username: userData.username,
				email: userData.email,
				passwordH: hash
			});
		});
	});
}

// authenticate user (when user logs in)
UserSchema.statics.authenticate = function (email, password, callback) {
  // find user by email entered at log in
  this.findOne({email: email}, function (err, user) {
    console.log(user);
    
    // throw error if can't find user
    if (user === null) {
      throw new Error('Invalid email or password');

    // if found user, check if password is correct
    } else if (user.checkPassword(password)) {
      callback(null, user);
    }
  });
};

// compare password user enters with hashed password (`passwordH`)
UserSchema.methods.checkPassword = function (password) {
  // run hashing algorithm (with salt) on password user enters in order to compare with `this.passwordH`
  return bcrypt.compareSync(password, this.passwordH);
};

var User = mongoose.model('User', UserSchema);

module.exports = User;

// Eventually, add a captcha for creating a new user
// Have comment buttons redirect to show the login modal if there's no user logged in

// ROBOMONGO