const assert = require('assert');
const Game = require('../../src/model/game.model');

describe('Validating records',() => {
  it('requires a name',() => {
    const game = new Game({ gameName: undefined });
    const validationResult = game.validateSync();
    const { message } = validationResult.errors.gameName;

    assert(message === 'the name of the game is missing, please enter a name.');
  });

  it('dissallow invalid records to be saved',(done) =>{
    const game = new Game({ gameName: undefined });
    game.save()
    .catch((validationResult) =>{
      const { message } = validationResult.errors.gameName;
      assert(message === 'the name of the game is missing, please enter a name.');
      done();
    });
  });
});
