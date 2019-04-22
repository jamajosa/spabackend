const express = require('express');
require('./config/passportConfig');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan');
const app = express();
const passport = require('passport');
const routes = require('./routes/routes');
var mongodb = require('./config/mongo.db');


app.use(cors());
app.use(passport.initialize());
app.use(bodyParser.json());
routes(app);


app.use((err, req, res, next) =>{
  res.status(422).send({error: err.message});
});

module.exports = app;
