var {evaluateBoard} = require('./evaluateBoard');
var {empty, no, D, U, UD, RD} = require('../mocks/mocks');

describe('evaluateBoard', () => {
  it('can handle a board with one solution', () => {
    // Arrange
    var board = [
      [D(), D(), D(), D()],
      [UD(), empty(), empty(), UD()],
      [U(), U(), U(), U()]
    ];
    var piece = [[UD(), UD()]];

    // Act
    //Assert
    expect(evaluateBoard(board, piece)).toEqual([[1,1]]);
  });
  it('can handle a board with multiple solutions', () => {
    // Arrange
    var board = [
      [D(), D(), D(), D(), D()],
      [UD(), empty(), empty(), empty(), UD()],
      [U(), U(), U(), U(), D()]
    ];
    var piece = [[UD(), UD()]];

    // Act
    //Assert
    expect(evaluateBoard(board, piece)).toEqual([[1,1], [2,1]]);
  });
});
