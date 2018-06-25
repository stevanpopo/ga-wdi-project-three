/* global api, expect, describe, it, beforeEach */

const Favour = require('../../models/favour');
const favourData = [{
  title: 'Favour title',
  category: 'Favour category',
  // owner: 'Dave',
  volunteer: 'Sally'
}];

describe('GET /favours', () => {

  beforeEach(done => {
    Favour.remove({})
      .then(() => Favour.create(favourData))
      .then(() => done());
  });

  it('should return status 200', done => {

    console.log('In the first test');
    // api.get('/api/favours')
    //   .end((err, res) => {
    //     expect(res.status).to.eq(200);
    //     done();
    //   });
  });

});
