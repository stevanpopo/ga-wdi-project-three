const Category = require('../models/category');

function indexRoute(req, res, next){
  Category.find()
    .then(categories => res.json(categories))
    .catch(next);
}

module.exports = {
  index: indexRoute
};
