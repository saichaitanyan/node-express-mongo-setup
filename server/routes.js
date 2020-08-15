/**
 * Main application routes
 */

'use strict';

const path = require('path');
const User =require('./api/user');

module.exports = function(app) {
  // Insert routes below
  app.use('/api/users', User);

};
