var mongoose = require('mongoose'),
	Event = require('../../models/event.js');
exports.engine = 'jade';

exports.add = function(req, res, next) {
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

exports.edit = function(req, res, next){
	var id = req.params.event_id;
	Event.findById(id, function(err, e) {
		if(err) return next(err);

		res.render('edit', {event: e});
	});
}

exports.show = function(req, res, next){
	var id = req.params.event_id;
	if(!id) return next(new Error("missing event_id parameter"));

	Event.findById(id, function(err, e) {
		if(err) return next(err);

		res.render('edit', {event: e});
	});	
}

exports.update = function(req, res, next){
	var id = req.params.event_id;
	var e = req.body.event;
	if(!id) return next(new Error("missing event_id parameter"));
	if(!e) return next(new Error("missing event post data"));

	Event.update({_id:id}, {title: e.title, content: e.content, start: e.start, end: e.end}, function (err) {
    	if (err) return next(err);
  		
  		res.redirect("/event/"+id)
	});
}

exports.create = function(req, res, next){

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
}