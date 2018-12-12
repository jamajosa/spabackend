const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Developer = require('../model/developer.model');

const CompanySchema = new Schema({
    companyName: {
      type: String,
      required: [true,'the name of the companies working on the game are missing.']
    },
    companyAge: {
      type: Number,
      required: [true,'the age of the company is missing.']
    },
    companyDeveloper:[{
      type: Schema.Types.ObjectId,
      ref: "developer"
    }]
  });

CompanySchema.pre('remove',function(next){
  const Developer = mongoose.model('developer');
  Developer.remove({_id:{ $in: this.companyDeveloper }})
  .then(() => next());
});

const Company = mongoose.model('company', CompanySchema);

module.exports = Company;
