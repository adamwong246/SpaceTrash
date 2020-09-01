const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const expressSession = require('express-session');
const favicon = require('serve-favicon');
const http = require('http');
const LocalStrategy = require('passport-local').Strategy;
const logger = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');

const drones = require('./routes/drones');
const index = require('./routes/index');
const sessions = require('./routes/sessions');
const ships = require('./routes/ships');
const User = require('./models/User');
const users = require('./routes/users');

module.exports = (cache) => {
  const app = express();

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
  app.use(expressSession({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
  }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(express.static('dist'));

  app.use('/', index);
  app.use('/drones', drones);
  app.use('/ships', ships);
  app.use('/users', users);

  app.use('/sessions', sessions(cache));

  // passport configuration
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

  return app
}
