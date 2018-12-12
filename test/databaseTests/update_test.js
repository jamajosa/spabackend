const assert = require('assert');
const Game = require('../../src/model/game.model');

describe('Updating records',() => {
  let game1;

  beforeEach((done) =>{
     game1 = new Game({gameName: 'Harry Potter 4'});
     game1.save()
     .then(() => done());
  });

function assertGameName(operation, done){
  operation
  .then(() => Game.find({}))
  .then((games) => {
    assert(games.length === 1);
    assert (games[0].gameName === 'Lord of the Rings online');
    done();
  });
}

  it('instance type using set and save', (done) => {
    game1.set('gameName', 'Lord of the Rings online');
    assertGameName(game1.save(), done);
  });

  it('model instance can update', (done) => {
    assertGameName(game1.updateOne({gameName: 'Lord of the Rings online'}), done);
  });

  it('model class can update', (done) => {
    //a bunch of records with criteria
    assertGameName(
    Game.updateOne({gameName: 'Harry Potter 4'},{gameName: 'Lord of the Rings online'}),
    done
  );
  });

  it('model class can update one record', (done) => {
    assertGameName(
    Game.findOneAndUpdate({gameName: 'Harry Potter 4'},{gameName: 'Lord of the Rings online'}),
    done
    );
  });

  it('model class can find id and update', (done) => {
    assertGameName(
    Game.findByIdAndUpdate(game1._id , {gameName: 'Lord of the Rings online'}),
    done
    );
  });

});
