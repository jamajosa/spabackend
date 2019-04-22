// Setup.
const mongoose      = require('mongoose');
const environment   = require('./enviroment');

// Gebruik ES6 promises i.p.v. Mongoose mpromise.
mongoose.Promise = global.Promise;

mongoose.connect(environment.dburl);
var connection = mongoose.connection
    .once('open', () => console.log('[Database] Verbonden met Mongo op ' + environment.dburl))
    .on('error', (error) => {console.warn('Warning', error.toString());
  });
  require('../model/user.model');

// Connectie.
module.exports = connection;
