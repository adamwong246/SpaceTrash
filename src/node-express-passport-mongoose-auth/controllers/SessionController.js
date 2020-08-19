var mongoose = require("mongoose");
var Session = require("../models/Session");
var User = require("../models/User");

var sessionController = {};

// Restrict access to root page
sessionController.home = function(req, res) {
  res.render('index', { user : req.user });
};

sessionController.allSessions = function(req, res) {
  Session.find({}, function(err, sessions) {
    res.render('allSessions', {allSessions:sessions, user: req.user});
  });
};

sessionController.newSession = function(req, res) {
  User.find({}, function(err, allUsers) {
    res.render('newSession', {allUsers: allUsers, user: req.user});
  });
};

sessionController.createSession = function(req, res) {
  const session = new Session(req.body);
  session.save().then((s) => {
    res.redirect(`sessions/${s.id}`)
  });
};

sessionController.showSession = function(req, res) {
  Session.findById(req.params.id, function(err, session) {
    res.render('session', {session, user: req.user});
  });
};

sessionController.terminal = function(req, res) {
  Session.findById(req.params.id, function(err, session) {
    res.render('terminal', {session, user: req.user});
  });
};

sessionController.start = function(req, res) {
  const sessionIdParam =  req.params.id;
  const userIdParam =  req.params.userId;

  Session.findById(sessionIdParam, function(err, session) {
    User.findById(userIdParam, function(err, user) {

      const newState = {}
      newState[`userStates.${userIdParam}`] = "some great state"

      Session.findByIdAndUpdate(sessionIdParam,
        {
          $set: newState
        }, () => {
          res.redirect(`/sessions/${sessionIdParam}/terminal`)
        }
      )
    });
  });
};

module.exports = sessionController;
