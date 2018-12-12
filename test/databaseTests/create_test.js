const assert = require('assert');
const Game = require('../../src/model/game.model');

describe('Creating records',() => {
  it('saves a game', (done) => {
    const game1 = new Game({gameName: 'Harry Potter 5'});
    game1.save()
    .then(() => {
      assert(!game1.isNew);
      done();
    });
  });
});
