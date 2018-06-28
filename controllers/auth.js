const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { secret } = require('../config/environment');
const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance(),
  PNF = require('google-libphonenumber').PhoneNumberFormat;
// const phoneUtil = require('google-libphonenumber').phoneUtil;
// const phoneUtil = require('google-libphonenumber').PhoneNumberUtil;
// const PNF = require('google-libphonenumber').PhoneNumberFormat;

function register(req, res, next) {
  // const inputtedTel = req.body.telephone;
  // console.log('inputtedTel', inputtedTel);
  // const tel = phoneUtil.parse(inputtedTel, 'GB');
  // console.log('tel', tel);
  // console.log('formatted tel', phoneUtil.format(tel, PNF.E164));

  // req.body.telephone = phoneUtil.format(phoneUtil.parse(req.body.telephone, 'GB'), PNF.E164);
  // console.log('req.body.telephone', req.body.telephone);

  User.create(req.body)
    .then(user => res.json(user))
    .catch(next);
}

function login(req, res, next) {
  User.findOne({ email: req.body.email })
    .then(user => {
      if (!user || !user.validatePassword(req.body.password)) {
        return res.status(401).json({ message: 'Unauthorised' });
      }

      const token = jwt.sign({
        sub: user._id,
        currentUser: user
      },
      secret, { expiresIn: '6h' });

      res.json({
        user,
        token,
        message: `Welcome back ${user.username}`
      });
    })
    .catch(next);
}

module.exports = {
  register,
  login
};
