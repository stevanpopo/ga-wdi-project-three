const Favour = require('../models/favour');

function indexRoute(req, res, next){
  Favour.find()
    .populate('owner')
    .then(favours => res.json(favours))
    .catch(next);
}

function showRoute(req, res, next){
  Favour.findById(req.params.id)
    .populate('volunteer')
    .populate('owner')
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
  req.body.owner = req.currentUser;
  Favour.create(req.body)
    .then(favour => res.status(201).json(favour))
    .catch(next);
}

function deleteRoute(req, res, next){
  Favour.findById(req.params.id)
    .then(favour => favour.remove())
    .then(() => res.sendStatus(204))
    .catch(next);
}

function addVolunteerRoute(req, res, next) {
  Favour.findById(req.params.id)
    .populate('volunteer')
    .then(favour => {
      favour.volunteer.push(req.currentUser);
      return favour.save();
    })
    .then(favour => {
      res.json(favour);
    })
    .catch(next);
}

function commentCreateRoute(req, res, next){
  console.log('first req body', req.body);
  req.body.author = req.currentUser;
  Favour.findById(req.params.id)
    .populate('comments.author')
    .then(favour => {
      console.log('req.body', req.body);
      favour.comments.push(req.body);
      return favour.save();
    })
    .then(favour => res.json(favour))
    .catch(next);
}

module.exports = {
  index: indexRoute,
  show: showRoute,
  update: updateRoute,
  create: createRoute,
  delete: deleteRoute,
  addVolunteer: addVolunteerRoute,
  commentCreate: commentCreateRoute
};
