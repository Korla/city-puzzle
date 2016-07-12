var {evaluateSpot} = require('./evaluateSpot');
var {empty, no, D, U, UD, RD} = require('../mocks/mocks');

describe('evaluateSpot', () => {
  it('can handle a row', () => {
    // Arrange
    var spot = [
      [D(), D(), D(), D()],
      [UD(), empty(), empty(), UD()],
      [U(), U(), U(), U()]
    ];
    var piece = [[UD(), UD()]];

    // Act
    // Assert
    expect(evaluateSpot(piece)(spot)).toEqual(true);
  });
  it('can handle a column', () => {
    // Arrange
    var spot = [
      [D(), D(), D()],
      [UD(), empty(), UD()],
      [UD(), empty(), UD()],
      [U(), U(), U()]
    ];
    var piece = [
      [UD()],
      [UD()]
    ];

    // Act
    // Assert
    expect(evaluateSpot(piece)(spot)).toEqual(true);
  });
  it('can handle a rectangle', () => {
    // Arrange
    var spot = [
      [D(), D(), D(), D()],
      [UD(), empty(), empty(), UD()],
      [UD(), empty(), empty(), UD()],
      [U(), U(), U(), U()]
    ];
    var piece = [
      [UD(), UD()],
      [UD(), UD()]
    ];

    // Act
    // Assert
    expect(evaluateSpot(piece)(spot)).toEqual(true);
  });
  it('can handle empty spots in the piece', () => {
    // Arrange
    var spot = [
      [D(), D(), D(), D()],
      [UD(), empty(), empty(), UD()],
      [UD(), empty(), RD(), UD()],
      [U(), U(), U(), U()]
    ];
    var piece = [
      [UD(), U()],
      [UD(), empty()]
    ];

    // Act
    // Assert
    expect(evaluateSpot(piece)(spot)).toEqual(true);
  });
  it('wrong piece size throws', () => {
    // Arrange
    var spot = [
      [D(), D(), D(), D()],
      [UD(), empty(), empty(), UD()],
      [U(), U(), U(), U()]
    ];
    var piece = [[UD(), UD(), empty()]];

    // Act
    // Assert
    expect(() => evaluateSpot(piece)(spot)).toThrow();
  });
  it('wrong connections returns false', () => {
    // Arrange
    var spot = [
      [D(), D(), D(), D()],
      [UD(), empty(), empty(), UD()],
      [U(), U(), U(), U()]
    ];
    var piece = [[UD(), U()]];

    // Act
    // Assert
    expect(evaluateSpot(piece)(spot)).toEqual(false);
  });
});
