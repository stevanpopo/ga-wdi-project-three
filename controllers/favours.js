const Favour = require('../models/favour');

function indexRoute(req, res, next){
  Favour.find()
    .populate('owner')
    .then(favours => res.json(favours))
    .catch(next);
}

function showRoute(req, res, next){
  Favour.findById(req.params.id)
    .populate('volunteers')
    .populate('owner')
    .populate('comments.author')
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
    .populate('volunteers')
    .then(favour => {
      favour.volunteers.push(req.currentUser);
      return favour.save();
    })
    .then(favour => {
      res.json(favour);
    })
    .catch(next);
}

function chooseVolunteerRoute(req, res, next){
  Favour.findById(req.params.id)
    .populate('volunteers') //do i need this?
    .then(favour => {
      //find id in favour.volunteers
      // splice it out
      // add it to chosen array
    });
}

function commentCreateRoute(req, res, next){
  req.body.author = req.currentUser;
  Favour.findById(req.params.id)
    .populate('comments.author')
    .then(favour => {
      favour.comments.push(req.body);
      return favour.save();
    })
    .then(favour => res.json(favour))
    .catch(next);
}

function commentDeleteRoute(req, res, next){
  Favour.findById(req.params.id)
    .then(favour => {
      const comment = favour.comments.id(req.params.commentId);
      comment.remove();
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
  chooseVolunteer: chooseVolunteerRoute,
  commentCreate: commentCreateRoute,
  commentDelete: commentDeleteRoute
};
