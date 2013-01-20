var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EventSchema = new Schema({
	title     : { type: String, required: true, trim: true },
	content   : { type: String, required: true, trim: true },
	start     : {type: Date },
	end       : {type: Date },
	published : {type: Boolean }
});

module.exports = mongoose.model('Event', EventSchema);
