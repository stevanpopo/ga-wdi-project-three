const router = require('express').Router();
const favours = require('../controllers/favours');
const auth = require('../controllers/auth');
const users = require('../controllers/users');
const secureRoute = require('../lib/secureRoute');

router.route('/favours')
  .get(favours.index)
  .post(secureRoute, favours.create);

router.route('/favours/:id')
  .get(favours.show)
  .put(secureRoute, favours.update)
  .delete(secureRoute, favours.delete);

router.post('/favours/:id/volunteers', secureRoute, favours.addVolunteer);

router.post('/register', auth.register);
router.post('/login', auth.login);

router.get('/users/:id', users.show);
router.get('/users/', users.index);


module.exports = router;
