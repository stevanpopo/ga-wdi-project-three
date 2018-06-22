const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { secret } = require('../config/environment');

function register(req, res) {
  User.create(req.body)
    .then(user => res.json(user))
    .catch(err => console.log(err));
  // .catch(next);
}

module.exports = {
  register
};
