const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const Favour = require('../models/favour');
const User = require('../models/user');
const { dbURI } = require('../config/environment');

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase();

  User.create([{
    username: 'Martin',
    email: 'm@m.m',
    password: 'm',
    passwordConfirmation: 'm',
    points: 400
  },{
    username: 'Steve',
    email: 's@s.s',
    password: 's',
    passwordConfirmation: 's',
    points: 300
  },{
    username: 'Nick',
    email: 'n@n.n',
    password: 'n',
    passwordConfirmation: 'n',
    points: 200
  },{
    username: 'Mike',
    email: 'm@m.m',
    password: 'm',
    passwordConfirmation: 'm',
    points: 350
  },{
    username: 'Rachel',
    email: 'r@r.r',
    password: 'r',
    passwordConfirmation: 'r',
    points: 375
  },{
    username: 'Linda',
    email: 'l@l.l',
    password: 'l',
    passwordConfirmation: 'l',
    points: 1000
  },{
    username: 'James',
    email: 'j@j.j',
    password: 'j',
    passwordConfirmation: 'j',
    points: 100
  },{
    username: 'Josh',
    email: 'j@t.j',
    password: 'j',
    passwordConfirmation: 'j',
    points: 450
  },{
    username: 'Gerry',
    email: 'g@g.g',
    password: 'g',
    passwordConfirmation: 'g',
    points: 30
  }])
    .then(users => {
      console.log(`${users.length} users created.`);
      return Favour.create([{
        title: 'Lawnmower rental',
        category: 'Domestic',
        owner: users[0],
        volunteer: users[1],
        comments: [{
          content: 'I\'ll do it, for a few points more',
          author: users[7]
        },{
          content: 'Hey, when do you need this by?',
          author: users[3]
        }],
        points: 20,
        location: {
          lat: 51.464,
          lng: -0.03607
        }
      },{
        title: 'Steward at Church fair',
        category: 'Events',
        owner: users[1],
        comments: [{
          content: 'Would love to, but I\'m out of town',
          author: users[3]
        },{
          content: 'Hey guys, lets just go to Jujus!',
          author: users[8]
        }],
        points: 75,
        location: {
          lat: 51.5138453,
          lng: -0.0983506
        }
      }]);
    })
    .then(favours => console.log(`${favours.length} favours created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
