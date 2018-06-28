const Favour = require('../models/favour');
const twilio = require('../lib/twilio');

function indexRoute(req, res, next){
  Favour.find()
    .populate('similarFavours')
    .populate('owner')
    .then(favours => res.json(favours))
    .catch(next);
}

function showRoute(req, res, next){
  Favour.findById(req.params.id)
    .populate('volunteers')
    .populate('chosen_volunteers')
    .populate('owner')
    .populate('comments.author')
    .populate('similarFavours')
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
  req.body.status = 'tender';
  Favour.create(req.body)
    .then(favour => {
      console.log(favour);
      res.status(201).json(favour);
    })
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

      // console.log('all volunteers', favour.volunteers);

      const chosenVolunteers = favour.volunteers.filter(volunteer => volunteer._id.toString() === req.params.volunteerId);
      const notChosenVolunteers = favour.volunteers.filter(volunteer => volunteer._id.toString() !== req.params.volunteerId);

      // console.log('chosen volunteers', chosenVolunteers);
      // console.log('not chosen volunteers', notChosenVolunteers);

      favour.volunteers = notChosenVolunteers;
      favour.chosen_volunteers = chosenVolunteers;

      // console.log('favour.volunteers', favour.volunteers);
      // console.log('favour.chosen_volunteers', favour.chosen_volunteers);

      favour.status = 'inProgress';

      return twilio.sendSMS('You have been chosen to complete this favour.','+447530486805')
        .then(() => favour.save());
    })
    .then(favour => res.json(favour))
    .catch(next);
}

function changeFavourStatusRoute(req, res, next){
  Favour.findById(req.params.id)
    .then(favour => {
      console.log('in the change status route');
      console.log(favour.status);
      if(favour.status === 'inProgress'){
        console.log('in the if');
        favour.status = 'completed';
        return favour.save();
      } else if (favour.status === 'completed'){
        console.log('in the else if');
        favour.status = 'verified';
        return favour.save();
      }
    })
    .then(favour => res.json(favour))
    .catch(next);
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
  commentDelete: commentDeleteRoute,
  changeFavourStatus: changeFavourStatusRoute
};
