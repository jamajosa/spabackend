const Game = require('../model/game.model')

module.exports = {
  greeting(req,res){
    res.send({hi:'there'})
  },
  create(req,res,next){
    const gameProps = req.body;
    Game.create(gameProps)
    .then(game => res.send(game))
    .catch(next);
  },
  edit(req,res,next){
    const gameId = req.params.id;
    const gameProps = req.body;

    Game.findByIdAndUpdate({_id:gameId},gameProps)
    .then(() => Game.findById({_id:gameId}))
    .then(game => res.send(game))
    .catch(next);
  },
  delete(req,res,next){
    const gameId = req.params.id;

    Game.findByIdAndRemove({_id: gameId})
    .then(game => res.status(204).send(game))
    .catch(next);
  },
  read(req,res,next){
    Game.find({})

    //.populate('companyDeveloper')
    .populate({
  path: "gameCompany",
  populate:{path:"companyDeveloper"}
  })
    .then((game) => res.status(200).send(game))
    .catch(next);
  },
  readById(req,res,next){

    const gameId = req.params.id;
    Game.findById({_id: gameId})
    .then((game) => res.status(200).send(game))
    .catch(next);
  },
  addComp(req,res,next){
    const gameId = req.params.id;
    const company = req.body.id;
    Company.findByIdAndUpdate({ _id: gameId },
      { $push: { gameCompany: company } })
    .then((game) => res.status(200).send(game))
    .catch(next);
  }
  // pushACompany(req,res,next){
  //   const gameId = req.params.id;
  // }
};
