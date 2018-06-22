const express = require('express');
const app = express();
const { port, dbURI } = require('./config/environment');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const routes = require('./config/routes');

mongoose.connect(dbURI);

<<<<<<< HEAD
app.use(bodyParser.json());
=======
app.use('/api', routes);
>>>>>>> 262a5ebb604ac8d17de483eb2d4466e0ec7066b9

app.listen(port, ()=> console.log(`Listening for action on port:${port}`));
