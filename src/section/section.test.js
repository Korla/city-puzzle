var {section} = require('./section');

describe('section', () => {
  it('can return a row section', () => {
    // Arrange
    var grid = createGrid([4,4]);
    var topLeft = [1,1];
    var bottomRight = [2,1];

    // Act
    var result = section(grid, topLeft, bottomRight);

    // Assert
    expect(result.length).toEqual(1);
    expect(result[0].length).toEqual(2);
    expect(result[0][0]).toEqual('11');
    expect(result[0][1]).toEqual('21');
  });

  it('can return a column section', () => {
    // Arrange
    var grid = createGrid([4,4]);
    var topLeft = [1,1];
    var bottomRight = [1,2];

    // Act
    var result = section(grid, topLeft, bottomRight);

    // Assert
    expect(result.length).toEqual(2);
    expect(result[0].length).toEqual(1);
    expect(result[1].length).toEqual(1);
    expect(result[0][0]).toEqual('11');
    expect(result[1][0]).toEqual('12');
  });

  it('can return a row and column section', () => {
    // Arrange
    var grid = createGrid([4,4]);
    var topLeft = [1,1];
    var bottomRight = [2,2];

    // Act
    var result = section(grid, topLeft, bottomRight);

    // Assert
    expect(result.length).toEqual(2);
    expect(result[0].length).toEqual(2);
    expect(result[1].length).toEqual(2);
    expect(result[0][0]).toEqual('11');
    expect(result[1][0]).toEqual('12');
    expect(result[0][1]).toEqual('21');
    expect(result[1][1]).toEqual('22');
  });

  it('returns the grid if the desired section is the same as the grid', () => {
    // Arrange
    var grid = createGrid([4,4]);
    var topLeft = [0,0];
    var bottomRight = [3,3];

    // Act
    var result = section(grid, topLeft, bottomRight);

    // Assert
    expect(result.length).toEqual(4);
    expect(result[0].length).toEqual(4);
    expect(result[1].length).toEqual(4);
    expect(result[2].length).toEqual(4);
    expect(result[3].length).toEqual(4);
    expect(result[0][0]).toEqual('00');
    expect(result[1][0]).toEqual('01');
    expect(result[0][1]).toEqual('10');
    expect(result[1][1]).toEqual('11');
  });

  it('throws if any of the ordinates are out of bounds', () => {
    // Arrange
    var grid = createGrid([4,4]);

    // Act
    // Assert
    expect(() => section(grid, [-1,0], [3,3])).toThrow();
    expect(() => section(grid, [0,-1], [3,3])).toThrow();
    expect(() => section(grid, [4,0], [3,3])).toThrow();
    expect(() => section(grid, [0,4], [3,3])).toThrow();
    expect(() => section(grid, [0,0], [4,3])).toThrow();
    expect(() => section(grid, [0,0], [3,4])).toThrow();
    expect(() => section(grid, [0,0], [-1,3])).toThrow();
    expect(() => section(grid, [0,0], [3,-1])).toThrow();
  });

  it('throws if any of the coordinates are illegal', () => {
    // Arrange
    var grid = createGrid([4,4]);

    // Act
    // Assert
    expect(() => section(grid, [3,0], [0,3])).toThrow();
    expect(() => section(grid, [0,3], [3,0])).toThrow();
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
