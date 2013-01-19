var mongoose = require('mongoose'),
	Event = require('../../models/event.js');
exports.engine = 'jade';

exports.edit = function(req, res, next) {
	var body = req.body;
	res.message('Information updated!');
	res.redirect('/event/' + req.pet.id);
}

exports.add = function(req, res, next) {
<<<<<<< HEAD
	var newEvent = new Event();
  	res.render('add', {event : newEvent});
}

exports.create = function(req, res, next) {

}

exports.list = function(req, res, next) {
  	res.render('list', {});
=======
	var newEvent = new Event({title: 'arne', content: 'inserten'});
  	res.render('add', {event: newEvent});
}

exports.create = function(req, res, next){
	console.log(req.body.event);

	var newEvent = new Event(req.body.event);

	newEvent.save(function(error){
	    if(error){
	        res.json(error);
	    }
	    else{
	        res.redirect('/events')
	    }
	});
}

exports.list = function(req, res, next) {
	Event.find(function (err, events) {
		if (err) 
		{
			res.json(err);
		}
		else
		{
			res.render('list', {events: events});
		}
	})
>>>>>>> 0084f4b23f8a3df44175be4d244b15f4920af187
}