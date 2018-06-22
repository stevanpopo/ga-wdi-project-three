const router = require('express').Router();
const favours = require('../controllers/favours');

router.route('/favours')
  .get(favours.index);

module.exports = router;
