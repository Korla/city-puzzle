var {evaluate} = require('./evaluate');
var {no, D, U, R, L, UR} = require('../mocks/mocks')

describe('evaluate', () => {
  it('can have no connections', () => {
    // Arrange
    var evalgrid = [
      [no(), no(), no()],
      [no(), no(), no()],
      [no(), no(), no()]
    ];

    // Act
    // Assert
    expect(evaluate(evalgrid)).toEqual(true);
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
    expect(evaluate(evalgrid)).toEqual(true);
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
    expect(evaluate(evalgrid)).toEqual(false);
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
    expect(evaluate(evalgrid)).toEqual(false);
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
    expect(evaluate(evalgrid)).toEqual(true);
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
    expect(evaluate(evalgrid)).toEqual(false);
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
    expect(evaluate(evalgrid)).toEqual(false);
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
    expect(evaluate(evalgrid)).toEqual(true);
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
    expect(evaluate(evalgrid)).toEqual(false);
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
    expect(evaluate(evalgrid)).toEqual(false);
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
    expect(evaluate(evalgrid)).toEqual(true);
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
    expect(evaluate(evalgrid)).toEqual(false);
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
    expect(evaluate(evalgrid)).toEqual(false);
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
    expect(evaluate(evalgrid)).toEqual(true);
  });
});

function createGridWithRoads(roads) {
  return roads.map(row => row.map(roads => ({roads})));
}
