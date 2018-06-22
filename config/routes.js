const router = require('express').Router();
const favours = require('../controllers/favours');

router.route('/favours')
  .get(favours.index);

router.route('/favours/:id')
  .get(favours.show);
  // 
  // .put(favours.update);

module.exports = router;
