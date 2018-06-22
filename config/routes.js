const router = require('express').Router();
const favours = require('../controllers/favours');
const auth = require('../controllers/auth');

router.route('/favours')
  .get(favours.index)
  .post(favours.create);

router.route('/favours/:id')
  .get(favours.show)
  .put(favours.update)
  .delete(favours.delete);

router.post('/register', auth.register);
router.post('/login', auth.login);

module.exports = router;
