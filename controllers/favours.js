const Favour = require('../models/favour');

function indexRoute(req, res, next){
  Favour.find()
    .then(favours => res.json(favours))
    .catch(next);
}

function showRoute(req, res, next){
  Favour.findById(req.params.id)
    .then(favour => res.json(favour))
    .catch(next);
}

// function updateRoute(req, res, next){
//   Favour.findById(req.params.id)
//     .then(favour => console.log(favour))
//     .then(() => console.log(req.body));
//     // .then(favour => favour.set(req.body))
//     // .then(favour => favour.save())
//     // .then(favour => res.json(favour))
//     // .catch(next);
// }

module.exports = {
  index: indexRoute,
  show: showRoute
  // ,
  // update: updateRoute
};
