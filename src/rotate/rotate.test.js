var {rotate} = require('./rotate');

describe('rotate', () => {
  it('can rotate a square grid', () => {
    // Arrange
    var grid = createGrid([2,2]);
    expect(grid[0][0]).toEqual('00');
    expect(grid[0][1]).toEqual('10');
    expect(grid[1][0]).toEqual('01');
    expect(grid[1][1]).toEqual('11');

    // Act
    var result = rotate(grid);

    // Assert
    expect(result.length).toEqual(2);
    expect(result[0].length).toEqual(2);
    expect(result[1].length).toEqual(2);
    expect(result[0][0]).toEqual('01');
    expect(result[0][1]).toEqual('00');
    expect(result[1][0]).toEqual('11');
    expect(result[1][1]).toEqual('10');
  });

  it('can rotate a wide rectangular grid', () => {
    // Arrange
    var grid = createGrid([2,3]);

    // Act
    var result = rotate(grid);

    // Assert
    expect(result.length).toEqual(3);
    expect(result[0].length).toEqual(2);
    expect(result[1].length).toEqual(2);
    expect(result[2].length).toEqual(2);
    expect(result[0][0]).toEqual('01');
    expect(result[0][1]).toEqual('00');
    expect(result[1][0]).toEqual('11');
    expect(result[1][1]).toEqual('10');
    expect(result[2][0]).toEqual('21');
    expect(result[2][1]).toEqual('20');
  });

  it('can rotate a tall rectangular grid', () => {
    // Arrange
    var grid = createGrid([3,2]);

    // Act
    var result = rotate(grid);

    // Assert
    expect(result.length).toEqual(2);
    expect(result[0].length).toEqual(3);
    expect(result[1].length).toEqual(3);
    expect(result[0][0]).toEqual('02');
    expect(result[0][1]).toEqual('01');
    expect(result[0][2]).toEqual('00');
    expect(result[1][0]).toEqual('12');
    expect(result[1][1]).toEqual('11');
    expect(result[1][2]).toEqual('10');
  });

  it('can rotate a row', () => {
    // Arrange
    var grid = createGrid([1,3]);

    // Act
    var result = rotate(grid);

    // Assert
    expect(result.length).toEqual(3);
    expect(result[0].length).toEqual(1);
    expect(result[1].length).toEqual(1);
    expect(result[2].length).toEqual(1);
    expect(result[0][0]).toEqual('00');
    expect(result[1][0]).toEqual('10');
    expect(result[2][0]).toEqual('20');
  });

  it('can rotate a column', () => {
    // Arrange
    var grid = createGrid([3,1]);

    // Act
    var result = rotate(grid);

    // Assert
    expect(result.length).toEqual(1);
    expect(result[0].length).toEqual(3);
    expect(result[0][0]).toEqual('02');
    expect(result[0][1]).toEqual('01');
    expect(result[0][2]).toEqual('00');
  });
});

function createGrid([nbrOfRows,nbrOfColumns]) {
  var grid = [];
  for(var y = 0; y < nbrOfRows; y++) {
    var row = [];
    grid.push(row);
    for(var x = 0; x < nbrOfColumns; x++) {
      row.push('' + x + y);
    }
  }
  return grid;
}
