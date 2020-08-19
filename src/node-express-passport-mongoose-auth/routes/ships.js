var express = require('express');

var ship = require("../controllers/ShipController.js");

var router = express.Router();

router.get('/', ship.allShips);
router.post('/', ship.create);

router.get('/new', ship.newShip);

router.get('/:id', ship.show);
router.post('/:id', ship.edit);

module.exports = router;
