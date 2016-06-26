var {salmon} = require('./salmon');

describe('evaluate', () => {
  it('can have no connections', () => {
    // Arrange
    var grid;
    var piece;

    // Act
    var result = salmon(grid, piece);
    
    // Assert
    expect(result).toEqual(true);
  });
});
