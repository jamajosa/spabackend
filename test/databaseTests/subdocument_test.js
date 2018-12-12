// const assert = require('assert');
// const Game = require('../src/model/game.model');
//
// describe('Subdocuments',() => {
//   it('can Create A subdocument', (done) => {
//     const game1 = new Game ({
//       gameName:'game',
//       //subdocument
//       gameCompany:[{companyName:'company',companyAge:1}]
//   });
//
//   game1.save()
//   .then(()=>Game.findOne({gameName:'game'}))
//   .then((game)=>{
//     assert(game.gameCompany[0].companyName === 'company');
//     done();
//   });
// });
//
//   it('can add A subdocument to a existing record', (done) => {
//     const game1 = new Game ({
//       gameName:'game'
//   });
//
//   game1.save()
//   .then(() => Game.findOne({gameName:'game'}))
//   .then((game) => {
//     game.gameCompany.push({companyName: 'Jordy', companyAge:2 });
//     return game.save();
//     })
//     .then(() => Game.findOne({gameName:'game'}))
//     .then((game) => {
//       assert(game.gameCompany[0].companyName === 'Jordy');
//       done();
//     });
// });
// it('can remove a subdocument', (done) => {
//   const game1 = new Game ({
//     gameName:'game',
//     gameCompany:[{companyName:'company',companyAge:1}]
// });
//
// game1.save()
// .then(() => Game.findOne({gameName:'game'}))
// .then((game) => {
//   const gameComp = game.gameCompany[0];
//   gameComp.remove();
//   return game.save();
//   })
//   .then(() => Game.findOne({gameName:'game'}))
//   .then((game) => {
//     assert(game.gameCompany.length === 0);
//     done();
//   });
// });
// });
