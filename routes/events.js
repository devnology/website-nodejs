var databaseUrl = "devnology";
var collections = ["events"];
var db = require("mongojs").connect(databaseUrl, collections);

exports.list = function(req, res){  
  db.events.find(function(err, docs) {
    var events = docs;
    res.render('events', { title: 'Express', events: events });
  });
};

exports.addevent = function(req, res){
  res.render('addevent', { title: 'Express' });
};

exports.addeventpost = function(req, res){
	db.events.save({title: req.body.event.title, description: req.body.event.description});
};