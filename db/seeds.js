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
    bio: 'I\'ve worked in the social sector for years and love to contribute to the community. Particularly useful for working at events or caring for the elderly.',
    points: 400,
    telephone: '07530 486 805'
  },{
    username: 'Steve',
    email: 's@s.s',
    password: 's',
    passwordConfirmation: 's',
    image: 'http://www.fillmurray.com/200/202',
    bio: 'I love to help the KarmaCommunity. I have my security qualification so can help with large-scale events. I also love working with children and anything to do with sports. Reach out any time.',
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
        description: 'I desperately need to borrow a lawnmower so I can tend to my garden (forest). If anyone has a large scale lawnmower they could lend me that would be super useful.',
        category: 'Domestic',
        owner: users[0],
        status: 'tender',
        volunteers: [users[2], users[5]],
        chosen_volunteers: [],
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
        description: 'I\'m looking for someone to help me a steward at our next Church fair. The local council madates that we have one for security due to the number of people on site. Can anyone help?',
        category: 'Events',
        owner: users[1],
        status: 'inProgress',
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
        description: 'I\'m hosting a bbq for my little nephew and his friends birthday. It would be great if someone could help to cook the bbq whilst I look after the children. Anyone free?',
        category: 'Events',
        owner: users[4],
        status: 'inProgress',
        volunteers: [users[2], users[5]],
        comments: [],
        chosen_volunteers: [users[0]],
        points: 20,
        location: {
          lat: 55.5138453,
          lng: -0.0983506
        }
      },{
        title: 'Feed my cat please',
        category: 'Domestic',
        description: 'I\'ll be away from my home next week and would love for someone to feed my cat whilst i\'m away. Any cat lovers available to help out?',
        owner: users[6],
        volunteers: [users[3]],
        chosen_volunteers: [],
        status: 'tender',
        comments: [],
        points: 20,
        location: {
          lat: 52.464,
          lng: -0.03607
        }
      },{
        title: 'Check my homework',
        category: 'Education',
        description: 'Hey everyone - I\'m working on a big homework for school and I\'d love for someone older than me to give me some feedback. The topic is WW2 so anyone with a passion for history - even better!',
        owner: users[2],
        volunteers: [users[3],users[5]],
        chosen_volunteers: [users[0]],
        status: 'verified',
        comments: [],
        points: 30,
        location: {
          lat: 52.464,
          lng: -0.03607
        }
      },{
        title: 'Tutor my son anyone?',
        category: 'Education',
        description: 'Hey everyone - My son struggles with Maths at school but is really keen to learn. Could anyone help him with algebra?',
        owner: users[2],
        volunteers: [users[3],users[5]],
        chosen_volunteers: [users[0]],
        status: 'verified',
        comments: [],
        points: 50,
        location: {
          lat: 52.464,
          lng: -0.03607
        }
      },{
        title: 'Run with my mum',
        category: 'Domestic',
        description: 'Hey everyone - My mum really wants to get fit but hates excersise. I thought if she had a friend to run with she might be more up for it. Would anyone want to join her?',
        owner: users[2],
        volunteers: [users[3],users[5]],
        chosen_volunteers: [users[0]],
        status: 'verified',
        comments: [],
        points: 30,
        location: {
          lat: 52.464,
          lng: -0.03607
        }
      },{
        title: 'Tutor my daughter',
        category: 'Education',
        description: 'Hey everyone - My daughter struggles with English at school but is really keen to learn. Could anyone help him with algebra?',
        owner: users[2],
        volunteers: [users[3],users[5]],
        chosen_volunteers: [users[0]],
        status: 'verified',
        comments: [],
        points: 30,
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
