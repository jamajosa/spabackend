const Developer = require('../model/developer.model')

module.exports = {
  create(req,res,next){
    const developerProps = req.body;
    Developer.create(developerProps)
    .then(developer => res.send(developer))
    .catch(next);
  },
  edit(req,res,next){
    const developerId = req.params.id;
    const developerProps = req.body;

    Developer.findByIdAndUpdate({_id:developerId},developerProps)
    .then(() => Developer.findById({_id:developerId}))
    .then(developer => res.send(developer))
    .catch(next);
  },
  delete(req,res,next){
    const developerId = req.params.id;

    Developer.findByIdAndRemove({_id: developerId})
    .then(developer => res.status(204).send(developer))
    .catch(next);
  },
  read(req,res,next){
    Developer.find({})
    .then((developer) => res.status(200).send(developer))
    .catch(next);
  },
  readById(req,res,next){
    const developerId = req.params.id;
    Developer.findById({_id: devId})
    .then((developer) => res.status(200).send(developer))
    .catch(next);
  }
}
