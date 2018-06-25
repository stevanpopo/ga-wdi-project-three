/* global api, expect, describe, it, beforeEach */

const Favour = require('../../models/favour');
const User = require('../../models/user');

const userData = {
  username: 'test',
  email: 'test@test.com',
  password: 'pass',
  passwordConfirmation: 'pass'
};

describe('GET /favours', () => {

  beforeEach(done => {
    Favour.remove({})
      .then(() => User.remove({}))
      .then(() => User.create(userData))
      .then(user => {
        console.log('User created');
        const favourData = [{
          title: 'Favour title',
          category: 'Favour category',
          owner: user
        }];

        return Favour.create(favourData);
      })
      .then(favour => console.log(`${favour.length} favour(s) created`))
      .then(() => done());
  });

  it('should return status 200', done => {

    api.get('/api/favours')
      .end((err, res) => {
        expect(res.status).to.eq(200);
        done();
      });
  });

  it('should return an array of favours', done => {
    api.get('/api/favours')
      .end((err, res) => {
        expect(res.body).to.be.an('array');
        res.body.forEach(favour => {
          expect(favour).to.include.keys([
            '_id',
            'title',
            'category',
            'owner'
          ]);
        });
        done();
      });
  });
});
