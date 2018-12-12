const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes/routes')

mongoose.Promise = global.Promise;
if(process.env.NODE_ENV !== 'test'){
  mongoose.connect('mongodb://testuser:user1test@ds145921.mlab.com:45921/games');
}

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*'); // * => allow all origins
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,OPTIONS,DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");// add remove headers according to your needs
  next()
});

app.use(bodyParser.json());
routes(app);

app.use((err, req, res, next) =>{
  res.status(422).send({error: err.message});
});

module.exports = app;
