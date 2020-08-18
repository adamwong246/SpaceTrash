const http = require('http');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var Session = require('./models/Session.js');

const WebSocket = require('ws');

const bserver = http.createServer(app);
const webPort = 5000;

bserver.listen(webPort, function() {
  console.log('Web server start. http://localhost:' + webPort);
});
const wss = new WebSocket.Server({
  server: bserver
});

wss.on('connection', ws => {
  ws.room = [];
  ws.send(JSON.stringify({
    msg: "user joined"
  }));
  console.log('connected');
  ws.on('message', message => {
    console.log('message: ', message);
    var messag = JSON.parse(message);
    messag.createdAt = Date.now()
    if (messag.join) {
      ws.room.push(messag.join)
    }
    if (messag.room) {
      // broadcast(message);
    }
    if (messag.msg && messag.room) {
      console.log('message: ', messag.msg)
      Session.findByIdAndUpdate(
        messag.room,
        { $push: { chatLog: messag } },
        {}, (doc) => {
          console.log("done")
          broadcast(messag);
        }
      )

    }
  })

  ws.on('error', e => console.log(e))
  ws.on('close', (e) => console.log('websocket closed' + e))

})

function broadcast(message) {
  wss.clients.forEach(client => {
    console.log(client.room)
    console.log(message)
    console.log(client.room.indexOf(message.room))
    if (client.room.indexOf(message.room) > -1) {
      client.send(JSON.stringify(message))
    }
  })
}





mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/node-auth')
  .then(() => console.log('connection succesful'))
  .catch((err) => console.error(err));

var index = require('./routes/index');
var users = require('./routes/users');
var sessions = require('./routes/sessions');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/sessions', sessions);

// passport configuration
var User = require('./models/User');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
