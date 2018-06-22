const Favour = require('../models/favour');

function indexRoute(req, res, next){
  Favour.find()
    .then(favours => res.json(favours))
    .catch(next);
}

module.exports = {
  index: indexRoute
};
