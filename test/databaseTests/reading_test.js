const assert = require('assert');
const Game = require('../../src/model/game.model');

describe('Reading games out of the database',() => {
  let game1;

  beforeEach((done) =>{
     game1 = new Game({gameName: 'Harry Potter 5'});
     game2 = new Game({gameName: 'Harry Potter 4'});
     game3 = new Game({gameName: 'Harry Potter 3'});
     game4 = new Game({gameName: 'Harry Potter 2'});
     game5 = new Game({gameName: 'Harry Potter 1'});

     Promise.all([game1.save(),game2.save(),game3.save(),game4.save(),game5.save()])
     .then(() => done());
  });

  it('finds all games with the name of Harry Potter 5', (done) => {
    Game.find({gameName: 'Harry Potter 5'})
    .then((games)=>{
      assert(games[0]._id.toString() === game1._id.toString());
      done();
    });
  });

  it('finds a game with a particular id', (done) => {
    Game.findOne({_id:game1._id})
    .then((game)=>{
      assert(game.gameName === 'Harry Potter 5');
      done();
    });
  });

  it('can skip and limit the result set', (done) => {
    Game.find()
    .sort({ gameName: 1 })
    .skip(1)
    .limit(2)
    .then((games) => {
      assert(games.length === 2);
      assert(games[0].gameName === 'Harry Potter 2');
      assert(games[1].gameName === 'Harry Potter 3');
      done();
    });
  });


});
