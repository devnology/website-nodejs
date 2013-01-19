exports.engine = 'jade';

exports.edit = function(req, res, next){
  res.render('edit', { event: { title: "", content: ""} });
};

exports.update = function(req, res, next){
  var body = req.body;
  res.message('Information updated!');
  res.redirect('/event/' + req.pet.id);
};

exports.new = function(req, res, next){
  res.render('new', {event: {title: "", content: ""}})
}

exports.list = function(req, res, next){
  res.render('list', {})
}