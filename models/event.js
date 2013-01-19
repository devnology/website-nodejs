var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EventSchema = new Schema({
	title : { type: String, required: true, trim: true },
	content : { type: String, required: true, trim: true }
});

module.exports = mongoose.model('Event', EventSchema);
