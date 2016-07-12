var {rotate} = require('./rotate');
var {no, D, U, R, L, UR, empty} = require('../mocks/mocks');

describe('rotate', () => {
  it('can rotate a square grid', () => {
    // Arrange
    var grid = [
      [U(), U()],
      [U(), U()]
    ]

    // Act
    var result = rotate(grid);

    // Assert
    expect(result.length).toEqual(2);
    expect(result[0].length).toEqual(2);
    expect(result[1].length).toEqual(2);
    expect(result[0][0]).toEqual(R());
    expect(result[0][1]).toEqual(R());
    expect(result[1][0]).toEqual(R());
    expect(result[1][1]).toEqual(R());
  });
  it('can rotate a wide rectangular grid', () => {
    // Arrange
    var grid = [
      [R(), R(), R()],
      [R(), R(), R()]
    ]

    // Act
    var result = rotate(grid);

    // Assert
    expect(result.length).toEqual(3);
    expect(result[0].length).toEqual(2);
    expect(result[1].length).toEqual(2);
    expect(result[0][0]).toEqual(D());
    expect(result[0][1]).toEqual(D());
    expect(result[1][0]).toEqual(D());
    expect(result[1][1]).toEqual(D());
    expect(result[2][0]).toEqual(D());
    expect(result[2][1]).toEqual(D());
  });
  it('can rotate a tall rectangular grid', () => {
    // Arrange
    var grid = [
      [D(), D()],
      [D(), D()],
      [D(), D()]
    ]

    // Act
    var result = rotate(grid);

    // Assert
    expect(result.length).toEqual(2);
    expect(result[0].length).toEqual(3);
    expect(result[1].length).toEqual(3);
    expect(result[0][0]).toEqual(L());
    expect(result[0][1]).toEqual(L());
    expect(result[0][2]).toEqual(L());
    expect(result[1][0]).toEqual(L());
    expect(result[1][1]).toEqual(L());
    expect(result[1][2]).toEqual(L());
  });
  it('can rotate a row', () => {
    // Arrange
    var grid = [[L(), L(), L()]];

    // Act
    var result = rotate(grid);

    // Assert
    expect(result.length).toEqual(3);
    expect(result[0].length).toEqual(1);
    expect(result[1].length).toEqual(1);
    expect(result[2].length).toEqual(1);
    expect(result[0][0]).toEqual(U());
    expect(result[1][0]).toEqual(U());
    expect(result[2][0]).toEqual(U());
  });
  it('can rotate a column', () => {
    // Arrange
    var grid = [
      [U()],
      [U()],
      [U()]
    ]

    // Act
    var result = rotate(grid);

    // Assert
    expect(result.length).toEqual(1);
    expect(result[0].length).toEqual(3);
    expect(result[0][0]).toEqual(R());
    expect(result[0][1]).toEqual(R());
    expect(result[0][2]).toEqual(R());
  });
});
