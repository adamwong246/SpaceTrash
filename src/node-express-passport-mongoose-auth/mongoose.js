var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/node-auth')
  .then(() => console.log('connection succesful'))
  .catch((err) => console.error(err));
mongoose.set('debug', true);
