var mongoose = require('mongoose');
exports.engine = 'jade';

var Schema = mongoose.Schema
  , ObjectId = Schema.ObjectID;

var EventSchema = new Schema({
    title            : { type: String, required: true, trim: true },
    content            : { type: String, required: true, trim: true }
});

var Event = mongoose.model('Event', EventSchema);

exports.edit = function(req, res, next){
  var body = req.body;
  res.message('Information updated!');
  res.redirect('/event/' + req.pet.id);
};

exports.add = function(req, res, next){
	var newEvent = new Event();
  res.render('add', {event : newEvent});
}

exports.create = function(req, res, next){

}

exports.list = function(req, res, next){
  res.render('list', {})
}