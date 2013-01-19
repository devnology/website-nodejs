var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

<<<<<<< HEAD
module.exports = function() {
	var Event = new Schema({
		title : { type: String, required: true, trim: true },
    	content : { type: String, required: true, trim: true }
	});

	return mongoose.model('Event', Event);
}
=======
var EventSchema = new Schema({
	title : { type: String, required: true, trim: true },
	content : { type: String, required: true, trim: true }
});

module.exports = mongoose.model('Event', EventSchema);
>>>>>>> 0084f4b23f8a3df44175be4d244b15f4920af187
