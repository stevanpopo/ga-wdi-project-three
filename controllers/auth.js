const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { secret } = require('../config/environment');

function register(req, res, next) {
  req.body.points = 100;

  User.create(req.body)
    .then(user => res.json(user))
    .catch(next);
}

function login(req, res, next) {
  User.findOne({ email: req.body.email })
    .then(user => {
      if (!user || !user.validatePassword(req.body.password)) {
        return res.status(401).json({ message: 'Unauthorised' });
      }

      const token = jwt.sign({
        sub: user._id,
        currentUser: user
      },
      secret, { expiresIn: '6h' });

      res.json({
        user,
        token,
        message: `Welcome back ${user.username}`
      });
    })
    .catch(next);
}

module.exports = {
  register,
  login
};
