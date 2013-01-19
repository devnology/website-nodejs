var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,ObjectId = Schema.ObjectId;
 
var eventSchema = new Schema({
    title: String,
    content: String
});
 
return module.exports = mongoose.model('Event', eventSchema);