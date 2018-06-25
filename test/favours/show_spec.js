/* global api, expect, describe, it, beforeEach */

const Favour = require('../../models/favour');
const User = require('../../models/user');

const userData = {
  username: 'test',
  email: 'test@test.com',
  password: 'pass',
  passwordConfirmation: 'pass'
};

const favourData = [{
  title: 'Favour title',
  category: 'Favour category'
}];

let favour;

describe('GET /favours/:id', () => {

  beforeEach(done => {
    Favour.remove({})
      .then(() => User.remove({}))
      .then(() => User.create(userData))
      .then(user => {
        favourData[0].owner = user;
        return Favour.create(favourData);
      })
      .then(favours => favour = favours[0])
      .then(() => done());
  });

  it('should return status 200', done => {
    api.get(`/api/favours/${favour._id}`)
      .end((err, res) => {
        expect(res.status).to.eq(200);
        done();
      });
  });




});
