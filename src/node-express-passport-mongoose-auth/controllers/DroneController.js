var mongoose = require("mongoose");
var Drone = require("../models/Drone");
var Ship = require("../models/Ship");

var droneController = {};

droneController.all = function(req, res) {
  Drone.find({}, function(err, drones) {
    res.render('drones', {drones, user: req.user});
  });
};

droneController.new = function(req, res) {
  Ship.find({}, (err, ships) => {
      res.render('newDrone', {user: req.user, ships});
  })

};

droneController.create = function(req, res) {
  const drone = new Drone(req.body);
  drone.user = req.user.id
  drone.save().then((s) => {
    res.redirect(`drones/${s.id}`)
  });
};

droneController.show = function(req, res) {
  Drone.findById(req.params.id, function(err, drone) {
    res.render('Drone', {drone: drone.toObject({ virtuals: true }), user: req.user});
  });
};

droneController.edit = function(req, res) {

};

module.exports = droneController;
