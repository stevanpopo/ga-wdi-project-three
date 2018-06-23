const Favour = require('../models/favour');

function indexRoute(req, res, next){
  Favour.find()
    .populate('owner')
    .then(favours => res.json(favours))
    .catch(next);
}

function showRoute(req, res, next){
  Favour.findById(req.params.id)
    .then(favour => res.json(favour))
    .catch(next);
}

function updateRoute(req, res, next){
  Favour.findById(req.params.id)
    .then(favour => favour.set(req.body))
    .then(favour => favour.save())
    .then(favour => res.status(201).json(favour))
    .catch(next);
}

function createRoute(req, res, next){
  Favour.create(req.body)
    .then(favour => res.json(favour))
    .catch(next);
}

function deleteRoute(req, res, next){
  Favour.findById(req.params.id)
    .then(favour => favour.remove())
    .then(() => res.sendStatus(204))
    .catch(next);
}

module.exports = {
  index: indexRoute,
  show: showRoute,
  update: updateRoute,
  create: createRoute,
  delete: deleteRoute
};
