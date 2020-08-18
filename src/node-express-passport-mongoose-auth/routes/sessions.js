var express = require('express');
var router = express.Router();
var session = require("../controllers/SessionController.js");

router.get('/', session.allSessions);
router.get('/new', session.newSession);
router.post('/', session.createSession);
router.get('/:id', session.showSession);

module.exports = router;
