const mongoose = require("mongoose");

const Session = require("../models/Session");
const Ship = require("../models/Ship");
const User = require("../models/User");
const Drone = require("../models/Drone");
const gameState = require("../models/gameState.js");

const sessionController = {};


sessionController.home = function(req, res) {
  res.render('index', {
    user: req.user
  });
};

sessionController.allSessions = function(req, res) {
  Session.find({}, function(err, sessions) {
    res.render('allSessions', {
      allSessions: sessions,
      user: req.user
    });
  });
};

sessionController.newSession = function(req, res) {
  User.find({}, function(err, allUsers) {
    res.render('newSession', {
      allUsers: allUsers,
      user: req.user
    });
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
    res.render('session', {
      session,
      user: req.user
    });
  });
};

sessionController.clientApp = function(req, res) {
  Session.findById(req.params.id, function(err, session) {
    res.render('clientApp', {
      session,
      user: req.user
    });
  });
};

sessionController.clientSessionApp = function(req, res) {
  Session.findById(req.params.id, function(err, session) {
    res.render('clientSessionApp', {
      session,
      user: req.user
    });
  });
};

sessionController.start = function(req, res) {
  const sessionId = req.params.id;
  const userIdParam = req.params.userId;

  Session.findById(sessionId,(err, session) => {
    Ship.find({}, (err, ships) => {
      Drone.find({}, (err, drones) => {

        gameState.initializeState(
          session,
          ships.map((e) => e.toObject({virtuals: true})),
          drones.map((e) => e.toObject({virtuals: true}))
        )

        session.save().then((s) => {
          res.redirect(`/sessions/${sessionId}`)
        });

      })
    })
  })
};

module.exports = sessionController;
