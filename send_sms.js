// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'AC5b9bfcea7b84aee143b9164ca02a2405';
const authToken = 'df7bde0b75bbf9e16dbd27d248f3d340';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
    body: 'Ola - I come in peace.',
    from: '+441355377145',
    to: '+447530486805'
  })
  .then(message => console.log(message.sid))
  .done();
