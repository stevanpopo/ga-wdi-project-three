const express = require('express');
const app = express();
const { port, dbURI } = require('./config/environment');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const routes = require('./config/routes');

mongoose.connect(dbURI);

app.use(bodyParser.json());
app.use('/api', routes);

app.listen(port, ()=> console.log(`Listening for action on port:${port}`));
