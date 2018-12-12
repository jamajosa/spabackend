const assert = require('assert');
const Game = require('../../src/model/game.model');

describe('Removing a game',() => {
  let game1;

  beforeEach((done) =>{
     game1 = new Game({gameName: 'Harry Potter 5'});
     game1.save()
     .then(() => done());
  });

  it('model instance remove', (done) => {
    game1.remove()
    .then(() => Game.findOne({gameName: 'Harry Potter 5'}))
    .then((user) => {
      assert(user === null);
      done();
    });
  });

  it('class methode remove', (done) => {
    //remove a bunch of records with criteria
    Game.deleteOne({gameName: 'Harry Potter 5'})
    .then(() => Game.findOne({gameName: 'Harry Potter 5'}))
    .then((game2) => {
      assert(game2 === null);
      done();
    });
  });

  it('class methode findAndRemove', (done) => {
    Game.findOneAndDelete({gameName: 'Harry Potter 5'})
    .then(() => Game.findOne({gameName: 'Harry Potter 5'}))
    .then((game2) => {
      assert(game2 === null);
      done();
    });
  });

  it('class methode findByIdAndRemove', (done) => {
    Game.findByIdAndDelete(game1._id)
    .then(() => Game.findOne({gameName: 'Harry Potter 5'}))
    .then((game2) => {
      assert(game2 === null);
      done();
    });
  });
});
