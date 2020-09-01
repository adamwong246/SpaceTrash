var express = require('express');

var session = require("../controllers/SessionController.js");

var router = express.Router();

module.exports = (cache => {

  router.get('/', session.allSessions);
  router.get('/new', session.newSession);
  router.post('/', session.createSession);
  router.get('/:id', session.showSession);

  router.get('/:id/clientApp', session.clientApp);
  router.get('/:id/clientSessionApp', session.clientSessionApp);
  router.get('/:id/clientSessionSudoApp', session.clientSessionSudoApp);

  router.get('/:id/cache', session.cacheView(cache));
  router.post('/:id/start', session.start(cache));

  return router;
})
