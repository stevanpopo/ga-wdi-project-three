/* global api, expect, describe, it, beforeEach */

const Favour = require('../../models/favour');
const User = require('../../models/user');

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

describe('POST /favours', () => {

  beforeEach(done => {
    Favour.remove({})
      .then(() => User.remove({}))
      .then(() => User.create(userData))
      .then(user => {
        favourData.owner = user;
        return Favour.create(favourData);
      })
      .then(() => done());
  });

  it('should return a 401 unauthorized response', done => {

    api.post('/api/favours')
      .send(favourData)
      .end((err, res) => {
        expect(res.status).to.eq(401);
        done();
      });
  });

});
