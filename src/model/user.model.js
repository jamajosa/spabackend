const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
var environment = require('../config/enviroment');
var uniqueValidator = require('mongoose-unique-validator');
var userSchema = new mongoose.Schema({
  fullName:{
    type: String,
    required: true
  },
  email:{
    type:String,
    required: true,
    unique: true
  },
  password:{
    type:String,
    required: true,
    minlength:[4,'password must be atleast 4 characters long']
  },
  saltSecret: String
});
userSchema.plugin(uniqueValidator);

userSchema.path('email').validate((val) =>{
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

userSchema.pre('save', function (next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});

// Methods
userSchema.methods.verifyPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

userSchema.methods.generateJwt = function () {
  console.log(environment.env.JWT_SECRET)
    return jwt.sign({ _id: this._id},
        environment.env.JWT_SECRET,
        {
          expiresIn: environment.env.JWT_EXP
        });
}


const User = mongoose.model('User', userSchema);
module.exports = User;
