var {noOverlap} = require('./noOverlap');
var {empty, D} = require('../mocks/mocks');

describe('noOverlap', () => {
  it('can handle a single element', () => {
    // Arrange
    var first = [[empty()]];
    var second = [[D()]];

    // Act
    // Assert
    expect(noOverlap(first, second)).toEqual(true);
  });
  it('can handle a row', () => {
    // Arrange
    var first = [[empty(), empty()]];
    var second = [[D(), D()]];

    // Act
    // Assert
    expect(noOverlap(first, second)).toEqual(true);
  });
  it('can handle a column', () => {
    // Arrange
    var first = [[empty()], [empty()]];
    var second = [[D()], [D()]];

    // Act
    // Assert
    expect(noOverlap(first, second)).toEqual(true);
  });
  it('can handle a rectangle', () => {
    // Arrange
    var first = [[empty(), empty()], [empty(), empty()]];
    var second = [[D(), D()], [D(), D()]];

    // Act
    // Assert
    expect(noOverlap(first, second)).toEqual(true);
  });
  it('can handle empty elements in either argument', () => {
    // Arrange
    var first = [[empty()], [D()]];
    var second = [[D()], [empty()]];

    // Act
    // Assert
    expect(noOverlap(first, second)).toEqual(true);
  });
});
