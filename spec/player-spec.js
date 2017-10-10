var Player = require('./../js/pigDice.js').playerModule;
describe('Player', function() {

  it('should check that a player creates a name correctly', function() {
    var player = new Player(5)
    expect(player.name).toEqual("Player 5")

  });

  it("should check that a player creates it's number", function() {
    var player = new Player(5)
    expect(player.playerNumber).toEqual(5)
  });
  it("should check that a player creates it's variables correctly", function() {
    var player = new Player(5)
    expect(player.roll).toEqual(0)
    expect(player.turnScore).toEqual(0)
    expect(player.score).toEqual(0)
  });
});
