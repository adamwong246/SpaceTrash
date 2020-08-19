var express = require('express');
var router = express.Router();
var session = require("../controllers/SessionController.js");

router.get('/', session.allSessions);
router.get('/new', session.newSession);
router.post('/', session.createSession);
router.get('/:id', session.showSession);
router.get('/:id/terminal', session.terminal);
router.post('/:id/user/:userId/start', session.start);

module.exports = router;
