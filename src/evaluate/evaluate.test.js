var {evaluate} = require('./evaluate');

describe('evaluate', () => {
  it('can have no connections', () => {
    // Arrange
    var evalgrid = createGridWithRoads([
      [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
      [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
      [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
    ]);

    // Act
    // Assert
    expect(evaluate(evalgrid)).toEqual(true);
  });

  it('can connect to the top', () => {
    // Arrange
    var evalgrid = createGridWithRoads([
      [[0, 0, 0, 0], [0, 0, 1, 0], [0, 0, 0, 0]],
      [[0, 0, 0, 0], [1, 0, 0, 0], [0, 0, 0, 0]],
      [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
    ]);

    // Act
    // Assert
    expect(evaluate(evalgrid)).toEqual(true);
  });

  it('can be blocked above', () => {
    // Arrange
    var evalgrid = createGridWithRoads([
      [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
      [[0, 0, 0, 0], [1, 0, 0, 0], [0, 0, 0, 0]],
      [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
    ]);

    // Act
    // Assert
    expect(evaluate(evalgrid)).toEqual(false);
  });

  it('can block going down', () => {
    // Arrange
    var evalgrid = createGridWithRoads([
      [[0, 0, 0, 0], [0, 0, 1, 0], [0, 0, 0, 0]],
      [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
      [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
    ]);

    // Act
    // Assert
    expect(evaluate(evalgrid)).toEqual(false);
  });

  it('can connect to the right', () => {
    // Arrange
    var evalgrid = createGridWithRoads([
      [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
      [[0, 0, 0, 0], [0, 1, 0, 0], [0, 0, 0, 1]],
      [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
    ]);

    // Act
    // Assert
    expect(evaluate(evalgrid)).toEqual(true);
  });

  it('can be blocked to the right', () => {
    // Arrange
    var evalgrid = createGridWithRoads([
      [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
      [[0, 0, 0, 0], [0, 1, 0, 0], [0, 0, 0, 0]],
      [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
    ]);

    // Act
    // Assert
    expect(evaluate(evalgrid)).toEqual(false);
  });

  it('can block going left', () => {
    // Arrange
    var evalgrid = createGridWithRoads([
      [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
      [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 1]],
      [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
    ]);

    // Act
    // Assert
    expect(evaluate(evalgrid)).toEqual(false);
  });

  it('can connect to the bottom', () => {
    // Arrange
    var evalgrid = createGridWithRoads([
      [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
      [[0, 0, 0, 0], [0, 0, 1, 0], [0, 0, 0, 0]],
      [[0, 0, 0, 0], [1, 0, 0, 0], [0, 0, 0, 0]]
    ]);

    // Act
    // Assert
    expect(evaluate(evalgrid)).toEqual(true);
  });

  it('can be blocked to the bottom', () => {
    // Arrange
    var evalgrid = createGridWithRoads([
      [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
      [[0, 0, 0, 0], [0, 0, 1, 0], [0, 0, 0, 0]],
      [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
    ]);

    // Act
    // Assert
    expect(evaluate(evalgrid)).toEqual(false);
  });

  it('can block going up', () => {
    // Arrange
    var evalgrid = createGridWithRoads([
      [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
      [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
      [[0, 0, 0, 0], [1, 0, 0, 0], [0, 0, 0, 0]]
    ]);

    // Act
    // Assert
    expect(evaluate(evalgrid)).toEqual(false);
  });

  it('can connect to the left', () => {
    // Arrange
    var evalgrid = createGridWithRoads([
      [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
      [[0, 1, 0, 0], [0, 0, 0, 1], [0, 0, 0, 0]],
      [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
    ]);

    // Act
    // Assert
    expect(evaluate(evalgrid)).toEqual(true);
  });

  it('can be blocked to the left', () => {
    // Arrange
    var evalgrid = createGridWithRoads([
      [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
      [[0, 0, 0, 0], [0, 0, 0, 1], [0, 0, 0, 0]],
      [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
    ]);

    // Act
    // Assert
    expect(evaluate(evalgrid)).toEqual(false);
  });

  it('can block going right', () => {
    // Arrange
    var evalgrid = createGridWithRoads([
      [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
      [[0, 1, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
      [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
    ]);

    // Act
    // Assert
    expect(evaluate(evalgrid)).toEqual(false);
  });

  it('can have multiple connections', () => {
    // Arrange
    var evalgrid = createGridWithRoads([
      [[0, 0, 0, 0], [0, 0, 1, 0], [0, 0, 0, 0]],
      [[0, 0, 0, 0], [1, 1, 0, 0], [0, 0, 0, 1]],
      [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
    ]);

    // Act
    // Assert
    expect(evaluate(evalgrid)).toEqual(true);
  });
});

function createGridWithRoads(roads) {
  return roads.map(row => row.map(roads => ({roads})));
}
