const Company = require('../model/company.model')

module.exports = {
  create(req,res,next){
    const companyProps = req.body;
    Company.create(companyProps)
    .then(company => res.send(company))
    .catch(next);
  },
  edit(req,res,next){
    const companyId = req.params.id;
    const companyProps = req.body;

    Company.findByIdAndUpdate({_id:companyId},companyProps)
    .then(() => Company.findById({_id:companyId}))
    .then(company => res.send(company))
    .catch(next);
  },
  delete(req,res,next){
    const companyId = req.params.id;
    Company.findByIdAndRemove({_id: companyId})
    .then(company => res.status(204).send(company))
    .catch(next);
  },
  read(req,res,next){
    Company.find({})
    .populate('companyDeveloper')
    .then((company) => res.status(200).send(company))
    .catch(next);
  },
  readById(req,res,next){
    const companyId = req.params.id;
    Company.findById({_id: companyId})
    .then((company) => res.status(200).send(company))
    .catch(next);
  },
  addDev(req,res,next){
    const companyId = req.params.id;
    const developer = req.body.id;
    Company.findByIdAndUpdate({ _id: companyId },
      { $push: { companyDeveloper: developer } })
    .then((company) => res.status(200).send(company))
    .catch(next);
  },
}
