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
    passwordConfirmation: 'm'
  },{
    username: 'Steve',
    email: 's@s.s',
    password: 's',
    passwordConfirmation: 's'
  }])
    .then(users => {
      console.log(`${users.length} users created.`);
      return Favour.create([{
        title: 'Lawnmower rental',
        category: 'DIY',
        owner: users[0],
        volunteer: users[1]
      },{
        title: 'Steward at Church fair',
        category: 'Events',
        owner: users[1]
      }]);
    })
    .then(favours => console.log(`${favours.length} favours created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
