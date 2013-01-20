var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var schema = new Schema({
	name: { type: String, required: true },	
	admin: { type: Boolean, default: false }

	// username (e-mail) and password are provided by basic-auth-mongoose
});

schema.plugin(require('basic-auth-mongoose'));
module.exports = mongoose.model('User', schema);