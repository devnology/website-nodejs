
/*
 * GET home page.
 */

exports.addevent = function(req, res){
  res.render('addevent', { title: 'Express' });
};

exports.addeventpost = function(req, res){
  	var databaseUrl = "devnology"; // "username:password@example.com/mydb"
	var collections = ["events"];
	var db = require("mongojs").connect(databaseUrl, collections);
	db.events.save({title: req.body.event.title, description: req.body.event.description});
}