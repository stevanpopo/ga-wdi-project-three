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

  it('should return an object', done => {
    api.get(`/api/favours/${favour._id}`)
      .end((err, res) => {
        // console.log('res.body', res.body);
        expect(res.body.favour).to.be.an('object');
        // expect(favour).to.be.an('object');
        done();
      });
  });

  // remember to put secureRoute back

  it('should return the correct data', done => {
    api.get(`/api/favours/${favour._id}`)
      .end((err, res) => {
        expect(res.body.title).to.eq(favourData.title);
        expect(res.body.category).to.eq(favourData.category);
        console.log('favour', res.body.favour);
        console.log('owner', res.body.favour.owner);
        console.log('favourData.owner._id', favourData[0].owner._id);
        expect(favourData[0].owner._id.equals(res.body.favour.owner)).to.be.true;
        expect(res.body.favour.owner.toString()).to.deep.eq(favourData[0].owner._id.toString());
        // expect(res.body.favour.owner.username).to.eq(favourData[0].owner.username);
        // expect(favour.owner.email).to.eq(favourData[index].owner.email);
        done();

      });
  });

});
