var {evaluatePiece} = require('./evaluatePiece');
var {no, D, U, R, L, UR, empty} = require('../mocks/mocks');

describe('evaluatePiece', () => {
  it('can have no connections', () => {
    // Arrange
    var evalgrid = [
      [no(), no(), no()],
      [no(), no(), no()],
      [no(), no(), no()]
    ];

    // Act
    // Assert
    expect(evaluatePiece(evalgrid)).toEqual(true);
  });

  it('can connect to the top', () => {
    // Arrange
    var evalgrid = [
      [no(), D(), no()],
      [no(), U(), no()],
      [no(), no(), no()]
    ];

    // Act
    // Assert
    expect(evaluatePiece(evalgrid)).toEqual(true);
  });

  it('can be blocked above', () => {
    // Arrange
    var evalgrid = [
      [no(), no(), no()],
      [no(), U(), no()],
      [no(), no(), no()]
    ];

    // Act
    // Assert
    expect(evaluatePiece(evalgrid)).toEqual(false);
  });

  it('can block going down', () => {
    // Arrange
    var evalgrid = [
      [no(), D(), no()],
      [no(), no(), no()],
      [no(), no(), no()]
    ];

    // Act
    // Assert
    expect(evaluatePiece(evalgrid)).toEqual(false);
  });

  it('can connect to the right', () => {
    // Arrange
    var evalgrid = [
      [no(), no(), no()],
      [no(), R(), L()],
      [no(), no(), no()]
    ];

    // Act
    // Assert
    expect(evaluatePiece(evalgrid)).toEqual(true);
  });

  it('can be blocked to the right', () => {
    // Arrange
    var evalgrid = [
      [no(), no(), no()],
      [no(), R(), no()],
      [no(), no(), no()]
    ];

    // Act
    // Assert
    expect(evaluatePiece(evalgrid)).toEqual(false);
  });

  it('can block going left', () => {
    // Arrange
    var evalgrid = [
      [no(), no(), no()],
      [no(), no(), L()],
      [no(), no(), no()]
    ];

    // Act
    // Assert
    expect(evaluatePiece(evalgrid)).toEqual(false);
  });

  it('can connect to the bottom', () => {
    // Arrange
    var evalgrid = [
      [no(), no(), no()],
      [no(), D(), no()],
      [no(), U(), no()]
    ];

    // Act
    // Assert
    expect(evaluatePiece(evalgrid)).toEqual(true);
  });

  it('can be blocked to the bottom', () => {
    // Arrange
    var evalgrid = [
      [no(), no(), no()],
      [no(), D(), no()],
      [no(), no(), no()]
    ];

    // Act
    // Assert
    expect(evaluatePiece(evalgrid)).toEqual(false);
  });

  it('can block going up', () => {
    // Arrange
    var evalgrid = [
      [no(), no(), no()],
      [no(), no(), no()],
      [no(), U(), no()]
    ];

    // Act
    // Assert
    expect(evaluatePiece(evalgrid)).toEqual(false);
  });

  it('can connect to the left', () => {
    // Arrange
    var evalgrid = [
      [no(), no(), no()],
      [R(), L(), no()],
      [no(), no(), no()]
    ];

    // Act
    // Assert
    expect(evaluatePiece(evalgrid)).toEqual(true);
  });

  it('can be blocked to the left', () => {
    // Arrange
    var evalgrid = [
      [no(), no(), no()],
      [no(), L(), no()],
      [no(), no(), no()]
    ];

    // Act
    // Assert
    expect(evaluatePiece(evalgrid)).toEqual(false);
  });

  it('can block going right', () => {
    // Arrange
    var evalgrid = [
      [no(), no(), no()],
      [R(), no(), no()],
      [no(), no(), no()]
    ];

    // Act
    // Assert
    expect(evaluatePiece(evalgrid)).toEqual(false);
  });

  it('can have multiple connections', () => {
    // Arrange
    var evalgrid = [
      [no(), D(), no()],
      [no(), UR(), L()],
      [no(), no(), no()]
    ];

    // Act
    // Assert
    expect(evaluatePiece(evalgrid)).toEqual(true);
  });

  it('can have empty spots', () => {
    // Arrange
    var evalgrid = [
      [no(), D(), empty()],
      [no(), UR(), empty()],
      [no(), no(), no()]
    ];

    // Act
    // Assert
    expect(evaluatePiece(evalgrid)).toEqual(true);
  });

  it('needs to have a non-empty neighbor', () => {
    // Arrange
    var evalgrid = [
      [no(), empty(), R()],
      [empty(), UR(), empty()],
      [L(), empty(), no()]
    ];

    // Act
    // Assert
    expect(evaluatePiece(evalgrid)).toEqual(false);
  });
});

function createGridWithRoads(roads) {
  return roads.map(row => row.map(roads => ({roads})));
}
