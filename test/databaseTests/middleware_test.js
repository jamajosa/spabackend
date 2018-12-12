const mongoose = require('mongoose');
const assert = require('assert');
const Game = require('../../src/model/game.model');
const Developer = require('../../src/model/developer.model');
const Company = require('../../src/model/company.model');

describe('middleware',() =>{
let company1, developer1;


beforeEach((done) =>{
   game1 = new Game({gameName: 'Harry Potter 5'});
   company1 = new Company({companyName:'Mediamarkt',companyAge:5});
   developer1 = new Developer({name:"Jordan", age:21});

   game1.gameCompany = company1;
   company1.companyDeveloper.push(developer1);

   Promise.all([game1.save(), company1.save(), developer1.save()])
   .then(() => done());
});

  it('clean up on delete company',(done)=>{
    company1.remove()
    .then(() => Developer.count())
    .then((count) => {
      assert(count === 0);
      done();
    });
  });


});
