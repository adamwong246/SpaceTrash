const {
  toJs
} = require("immutable");
const mongoose = require("mongoose");

const Drone = require("../models/Drone");
const Session = require("../models/Session");
const Ship = require("../models/Ship");
const User = require("../models/User");

const sessionController = {};

sessionController.home = function(req, res) {
  res.render('index', {
    user: req.user
  });
};

sessionController.allSessions = function(req, res) {
  Session.find({}, function(err, allSessions) {
    // res.render('allSessions', {
    //   allSessions: sessions,
    //   user: req.user
    // });
    res.json(allSessions)
  });
};

sessionController.newSession = function(req, res) {
  Ship.find({}, function(err, allShips) {
    User.find({}, function(err, allUsers) {
      res.render('newSession', {
        allUsers: allUsers,
        allShips: allShips,
        user: req.user
      });
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
  if (!req.user) {
    res.render('login');
  }
  Session.findById(req.params.id, function(err, session) {
    res.render('clientSessionApp', {
      session,
      user: req.user
    });
  });
};

sessionController.clientSessionSudoApp = function(req, res) {
  Session.findById(req.params.id, function(err, session) {
    res.render('clientSessionSudoApp', {
      session,
      user: req.user
    });
  });
};

// these controller actions are functions of the cache
//////////////////////////////////////////////////////

sessionController.cacheView = (store) => {
  return function(req, res) {
    res.json(store.store.getState())
  };
}

sessionController.start = (cache) => {
  return function(req, res) {
    const sessionId = req.params.id;


    Session.findById(sessionId, (err, sessionDoc) => {

      User.find({
        '_id': sessionDoc.user

      }, (err2, usersDocs) => {

        const users = usersDocs
          .map((user) => {
            return user.toObject()
          })

        Ship.findById({'_id': sessionDoc.ship}, (err2, shipsDoc) => {
          const ship = shipsDoc.toObject({
            virtuals: true
          })

          cache.initializeGameStateV2(
            sessionDoc,
            ship,
            users
          )

          res.redirect(`/sessions/${sessionId}`)

          // Drone.find({}, (err3, dronesDocs) => {
          //   const drones = dronesDocs
          //     .map((drone) => drone.toObject({
          //       virtuals: true
          //     }))
          //
          //
          //
          // })
        })
      })
    })
  };
}

module.exports = sessionController;
