const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DeveloperSchema = new Schema({
    name: String,
    age : Number
});

const Developer = mongoose.model('developer', DeveloperSchema);

module.exports = Developer;
