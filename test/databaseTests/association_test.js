const assert = require('assert');
const Game = require('../../src/model/game.model');
const Developer = require('../../src/model/developer.model');
const Company = require('../../src/model/company.model');

describe('Associations',() => {
  let game1, developer1, company1;

  beforeEach((done) =>{
     game1 = new Game({gameName: 'Harry Potter 5'});
     company1 = new Company({companyName:'Mediamarkt',companyAge:5});
     developer1 = new Developer({name:"Jordan", age:21});

     game1.gameCompany = company1;
     company1.companyDeveloper.push(developer1);

     Promise.all([game1.save(), company1.save(), developer1.save()])
     .then(() => done());
  });

  it('saves a relation between a game and a company',(done)=>{
    Game.findOne({gameName:'Harry Potter 5'})
    .populate('gameCompany')
    .then((game) => {
      assert(game.gameCompany.companyName == "Mediamarkt")
      done();
    });
  });

  it('saves a full relation graph',(done)=>{
    Game.findOne({gameName:'Harry Potter 5'})
    .populate({
      path:'gameCompany',
      populate:{
        path: 'companyDeveloper' ,
        model: 'developer'
      }
    })
    .then((game) =>{
      assert(game.gameCompany.companyDeveloper[0].name === 'Jordan');
      assert(game.gameCompany.companyDeveloper[0].age === 21);
      assert(game.gameCompany.companyName === 'Mediamarkt');
      done();
    });
  });

});
