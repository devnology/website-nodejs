var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var schema = new Schema({
	email : { type: String, required: true },
	name : { type: String, required: true }

	// username and password are provided by basic-auth-mongoose
});

schema.plugin(require('basic-auth-mongoose'));
module.exports = mongoose.model('User', schema);