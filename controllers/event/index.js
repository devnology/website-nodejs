var mongoose = require('mongoose'),
	Event = require('../../models/event.js');
exports.engine = 'jade';

exports.edit = function(req, res, next) {
	var body = req.body;
	res.message('Information updated!');
	res.redirect('/event/' + req.pet.id);
}

exports.add = function(req, res, next) {
	var newEvent = new Event();
  	res.render('add', {event : newEvent});
}

exports.create = function(req, res, next) {

}

exports.list = function(req, res, next) {
  	res.render('list', {});
}