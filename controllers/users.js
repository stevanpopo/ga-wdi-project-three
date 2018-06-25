const User = require('../models/user');

function indexRoute(req, res, next){
  User.find()
    .then(users => res.json(users))
    .catch(next);
}

function showRoute(req, res, next){
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(next);
}

function updateRoute(req, res, next){
  User.findById(req.params.id)
    .then(user => user.set(req.body))
    .then(user => user.save())
    .then(user => res.status(201).json(user))
    .catch(next);
}

module.exports = {
  show: showRoute,
  index: indexRoute,
  update: updateRoute
};
