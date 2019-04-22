const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const jwt = require('jsonwebtoken');
var environment = require('../config/enviroment');
const _ = require('lodash');


const User = require('../model/user.model');
module.exports = {
  register(req,res,next){
    const userProps = req.body;
    User.create(userProps)
    .then(user => res.send(user))
    .catch(next);
  },
  read(req,res,next){
    User.find({})
    .then((user) => res.status(200).send(user))
    .catch(next);
  },
  authenticate(req, res, next){
      passport.authenticate('local', (err, user, info) => {
        console.log(user);
          if (err) return res.status(400).json(err);
          else if (user) return res.status(200).json({ "token": user.generateJwt() });
          else return res.status(404).json(info);
      })(req, res);
},
userProfile(req,res,next){
  User.findOne({ _id: req._id },
        (err, user) => {
            if (!user)
                return res.status(404).json({ status: false, message: 'User record not found.' });
            else
                return res.status(200).json({ status: true, user : _.pick(user,['fullName','email']) });
        }
    );
}

}
