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
      const volunteersStringified = favour.volunteers.map( volunteer => volunteer._id.toString());

      if(volunteersStringified.includes(req.params.volunteerId)){

        favour.chosen_volunteers.push(req.params.volunteerId);
        const index = volunteersStringified.indexOf(req.params.volunteerId);

        if (index > -1) {
          volunteersStringified.splice(index, 1);
          console.log('volunteersStringified', volunteersStringified);
        }
        
      } else {
        console.log('volunteer not found');
      }


      // check if volunteer is there
      // push volunteer to chosen_volunteers
      // if(favour.volunteers[0]._id.toString() === req.params.volunteerId){
      //   // console.log('found volunteer');
      //   // console.log('favour.chosen_volunteers', favour.chosen_volunteers);
      //   favour.chosen_volunteers.push(req.params.volunteerId);
      //   // console.log('favour.chosen_volunteers after', favour.chosen_volunteers);
      //   // console.log('volunteers', favour.volunteers);
      //
      //   // var array = [2, 5, 9];
      //   const volId = req.params.volunteerId.toString();
      //   console.log('type volId', typeof(volId));
      //   const index = favour.volunteers.indexOf(volId);
      //   console.log('index', index);
      //   if (index > -1) {
      //     const resultingArray = favour.volunteers.splice(index, 1);
      //     console.log('resultingArray', resultingArray);
      //   }
      // } else {
      //   console.log('volunteer not found');
      // }
      // splice out from volunteers array
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
  commentDelete: commentDeleteRoute
};
