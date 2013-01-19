var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

module.exports = function() {
	var Event = new Schema({
		title : { type: String, required: true, trim: true },
    	content : { type: String, required: true, trim: true }
	});

	return mongoose.model('Event', Event);
}