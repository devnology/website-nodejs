var mongoose = require('mongoose'),
	User = require('../../models/user.js');
exports.engine = 'jade';

exports.add = function(req, res, next) {
	var user = new User();
  	res.render('add', { user: user });
}

exports.create = function(req, res, next) {
	console.log(req.body.user);
	var user = new User(req.body.user);

	user.save(function(error) {
	    if (error) {
	        res.json(error);
	    } else {
	        res.redirect('/')
	    }
	});
}