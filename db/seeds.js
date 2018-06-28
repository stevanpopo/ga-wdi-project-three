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
    image: 'http://www.fillmurray.com/200/201',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis venenatis efficitur. Aenean ac eleifend lacus, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.',
    points: 400,
    telephone: '07530 486 805'
  },{
    username: 'Steve',
    email: 's@s.s',
    password: 's',
    passwordConfirmation: 's',
    image: 'http://www.fillmurray.com/200/202',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis venenatis efficitur. Aenean ac eleifend lacus, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.',
    points: 300,
    telephone: '07530486805'
  },{
    username: 'Nick',
    email: 'n@n.n',
    password: 'n',
    passwordConfirmation: 'n',
    image: 'http://www.fillmurray.com/200/203',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis venenatis efficitur. Aenean ac eleifend lacus, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.',
    points: 200,
    telephone: '(075)30 486 805'
  },{
    username: 'Chavez',
    email: 'c@c.c',
    password: 'c',
    passwordConfirmation: 'c',
    image: 'http://www.fillmurray.com/200/204',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis venenatis efficitur. Aenean ac eleifend lacus, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.',
    points: 350,
    telephone: '07530-486-805'
  },{
    username: 'Rachel',
    email: 'r@r.r',
    password: 'r',
    passwordConfirmation: 'r',
    image: 'http://www.fillmurray.com/200/205',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis venenatis efficitur. Aenean ac eleifend lacus, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.',
    points: 375,
    telephone: '+447530 486 805'
  },{
    username: 'Linda',
    email: 'l@l.l',
    password: 'l',
    passwordConfirmation: 'l',
    image: 'http://www.fillmurray.com/200/206',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis venenatis efficitur. Aenean ac eleifend lacus, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.',
    points: 1000
  },{
    username: 'James',
    email: 'j@j.j',
    password: 'j',
    passwordConfirmation: 'j',
    image: 'http://www.fillmurray.com/202/200',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis venenatis efficitur. Aenean ac eleifend lacus, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.',
    points: 100,
    telephone: '+447530 486 805'
  },{
    username: 'Josh',
    email: 'j@t.j',
    password: 'j',
    passwordConfirmation: 'j',
    image: 'http://www.fillmurray.com/203/200',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis venenatis efficitur. Aenean ac eleifend lacus, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.',
    points: 450
  },{
    username: 'Gerry',
    email: 'g@g.g',
    password: 'g',
    passwordConfirmation: 'g',
    image: 'http://www.fillmurray.com/204/200',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis venenatis efficitur. Aenean ac eleifend lacus, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.',
    points: 30
  }])
    .then(users => {
      console.log(`${users.length} users created.`);
      return Favour.create([{
        title: 'Lawnmower rental',
        category: 'Domestic',
        owner: users[0],
        status: 'tender',
        chosen_volunteers: [users[0]],
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
        status: 'completed',
        chosen_volunteers: [users[0]],
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
      },{
        title: 'Cook at my BBQ',
        category: 'Events',
        owner: users[4],
        status: 'tender',
        comments: [],
        chosen_volunteers: [users[0]],
        points: 20,
        location: {
          lat: 55.5138453,
          lng: -0.0983506
        }
      },{
        title: 'Feed my cat',
        category: 'Domestic',
        owner: users[6],
        volunteers: [users[3]],
        chosen_volunteers: [users[0]],
        status: 'tender',
        comments: [],
        points: 20,
        location: {
          lat: 52.464,
          lng: -0.03607
        }
      }]);
    })
    .then(favours => console.log(`${favours.length} favours created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
