var mongoose = require("mongoose");
var Ship = require("../models/Ship");

var shipController = {};

shipController.allShips = function(req, res) {
  Ship.find({}, function(err, allShips) {
    res.json(allShips.map((ship) => {
      return {
        id: ship.id,
        name: ship.name
      }
    }))
  });
};

shipController.create = function(req, res) {
  const ship = new Ship(req.body);
  ship.save().then((s) => {
    res.redirect(`ships/${s.id}`)
  });
};

shipController.show = function(req, res) {
  Ship.findById(req.params.id, function(err, ship) {
    res.render('ship', {
      ship: ship.toObject({
        virtuals: true
      }),
      user: req.user
    });
  });
};


module.exports = shipController;


// shipController.newShip = function(req, res) {
//   res.render('newShip', {user: req.user});
// };

// shipController.edit = function(req, res) {
//   const body = req.body;
//
//   Ship.findByIdAndUpdate(req.params.id,
//     {},
//     function(err, ship) {
//
//       if(body.name){
//         ship.name = body.name
//       } else if (body.newRoomX){
//         const room = {
//           name: body.newRoomName,
//           x: parseInt(body.newRoomX),
//           y: parseInt(body.newRoomY),
//           x2: parseInt(body.newRoomX2),
//           y2: parseInt(body.newRoomY2),
//         }
//         ship.rooms.push(room)
//       } else if (body.newDoorX){
//         const door = {
//           name: body.newDoorName,
//           x: parseInt(body.newDoorX),
//           y: parseInt(body.newDoorY),
//         }
//         ship.doors.push(door)
//       }
//
//       ship.save(() => {
//         res.redirect(`${req.params.id}`)
//       })
//
//       // if (err){
//       //   console.log(err)
//       // }
//       //
//
//     }
//   );
// };
