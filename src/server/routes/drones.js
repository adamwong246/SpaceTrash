var express = require('express');

var droneController = require("../controllers/droneController.js");

var router = express.Router();

router.get('/', droneController.all);
router.post('/', droneController.create);
router.get('/new', droneController.new);
router.get('/:id', droneController.show);
router.post('/:id', droneController.edit);

module.exports = router;
