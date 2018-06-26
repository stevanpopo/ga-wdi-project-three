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

describe('PUT /favours/:id', () => {

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
      // .then(console.log('favour in then not passed', favour))
      // .then(favour => console.log('favour in then', favour))
      .then(() => done());
  });

  it('should return a 401 unauthorized response', done => {

    api.put(`/api/favours/${favour._id}`)
      .send(favourData)
      .end((err, res) => {
        expect(res.status).to.eq(401);
        done();
      });
  });

});
