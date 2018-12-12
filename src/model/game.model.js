const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Company = require('../model/company.model');

const GameSchema = new Schema({
  gameName: {
    type: String,
    required: [true,'the name of the game is missing, please enter a name.']
},
gameDetails: {
  type: String
},
gameImage: {
  type: String
},
gameCompany:{
    type: Schema.Types.ObjectId,
    ref: "company"
  }
});

const Game = mongoose.model('game', GameSchema);

module.exports = Game;
