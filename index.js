const express = require('express');
const app = express();
const { port, dbURI } = require('./config/environment');

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');


mongoose.connect(dbURI);

app.listen(port, ()=> console.log(`Listening for action on port:${port}`));
