var {evaluateSpot} = require('./evaluateSpot');
var {no, D, U, R, L, UD} = require('../mocks/mocks');

describe('evaluateSpot', () => {
  it('can handle a row', () => {
    // Arrange
    var grid = [
      [D(), D(), D(), D()],
      [UD(), no(), no(), UD()],
      [U(), U(), U(), U()]
    ];
    var piece = [UD(), UD()];

    // Act
    // var result = evaluateSpot(grid, piece);
    //
    // // Assert
    // expect(result).toEqual(true);
  });
});
