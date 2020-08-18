var express = require('express');
var router = express.Router();
var auth = require("../controllers/AuthController.js");


/* GET users listing. */
router.get('/allUsers', auth.allUsers);

module.exports = router;
