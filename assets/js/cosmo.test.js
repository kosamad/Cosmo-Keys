
/**
 * @jest-environment jsdom
 */

describe("newGame works correctly",() =>{
    beforeAll(() => {
        game.score = 10;
        startGame();
    });
   test('game score is set to zero', () => {
    expect(game.score).toEqyal(0);
   })
});