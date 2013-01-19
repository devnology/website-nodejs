var express = require('express'),
  passport = require('passport'),
  util = require('util'),
  LocalStrategy = require('passport-local').Strategy,
  User = require('./models/user.js');
var app = module.exports = express();


/**
 * Authentication via Passport
 */

passport.use(new LocalStrategy(
  function(username, password, done) {

    User.findOne({'username' : username}, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false, { message: 'Unknown user: ' + username }); }
      if (!user.authenticate(password)) { return done(null, false, { message: 'Invalid password' }); }
      return done(null, user);
    });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findOne({_id: id}, function(err, user) {
    done(err, user);
  });
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login')
}


// map .renderFile to ".html" files
app.engine('html', require('ejs').renderFile);

// make ".jade" the default
app.set('view engine', 'jade');

// set views for error and 404 pages
app.set('views', __dirname + '/views');

// define a custom res.message() method
// which stores messages in the session
app.response.message = function(msg){
  // reference `req.session` via the `this.req` reference
  var sess = this.req.session;
  // simply add the msg to an array for later
  sess.messages = sess.messages || [];
  sess.messages.push(msg);
  return this;
};

// log
if (!module.parent) app.use(express.logger('dev'));

// serve static files
app.use(express.static(__dirname + '/public'));

// session support
app.use(express.cookieParser('some secret here'));
app.use(express.session());

// parse request bodies (req.body)
app.use(express.bodyParser());

// support _method (PUT in forms etc)
app.use(express.methodOverride());

// expose the "messages" local variable when views are rendered
app.use(function(req, res, next){
  var msgs = req.session.messages || [];

  // expose "messages" local variable
  res.locals.messages = msgs;

  // expose "hasMessages"
  res.locals.hasMessages = !! msgs.length;

  // empty or "flush" the messages so they
  // don't build up
  req.session.messages = [];
  next();
});

// load controllers
require('./lib/boot')(app, { verbose: !module.parent });

var mongoose = require('mongoose');
mongoose.connect('localhost', 'devnology');

// assume "not found" in the error msgs
// is a 404. this is somewhat silly, but
// valid, you can do whatever you like, set
// properties, use instanceof etc.
app.use(function(err, req, res, next){
  // treat as 404
  if (~err.message.indexOf('not found')) return next();

  // log it
  console.error(err.stack);

  // error page
  res.status(500).render('5xx');
});

app.use(passport.initialize());
app.use(passport.session());

var mongoose = require('mongoose');
mongoose.connect('localhost', 'devnology');


/**
 * Route definitions
 */

app.get('/about', ensureAuthenticated, function(req, res){
  res.render('about', { title: 'About' });
});

app.get('/login', function(req, res){
  res.render('login', { user: req.user, message: '' });
});

app.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login', failureFlash: false }),
  function(req, res) {
    res.redirect('/about');
  });


/**
 * Start webserver
 */

if (!module.parent) {
  app.listen(3000);
  console.log('\n  listening on port 3000\n');
}