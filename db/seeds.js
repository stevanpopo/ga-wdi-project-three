const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
// const Favour = require('../models/favour');
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
    .then(users => console.log(`${users.length} users created.`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
