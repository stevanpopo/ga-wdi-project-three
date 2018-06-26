/* global api, expect, describe, it, beforeEach */

const Favour = require('../../models/favour');
const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const { secret } = require('../../config/environment');

const userData = {
  username: 'test',
  email: 'test@test.com',
  password: 'pass',
  passwordConfirmation: 'pass'
};

const favourData = {
  title: 'Favour title',
  category: 'Favour category'
};

let token;
let favour;

describe('DELETE /favours/:id', () => {

  beforeEach(done => {
    Favour.remove({})
      .then(() => User.remove({}))
      .then(() => User.create(userData))
      .then(user => {
        token = jwt.sign({ sub: user._id }, secret, { expiresIn: '6h' });
        favourData.owner = user;
        return Favour.create(favourData);
      })
      .then(res => favour = res)
      .then(() => done());
  });




});
