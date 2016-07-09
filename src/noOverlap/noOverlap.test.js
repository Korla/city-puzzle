var {noOverlap} = require('./noOverlap');
var {empty, D} = require('../mocks/mocks');

describe('noOverlap', () => {
  it('single element', () => {
    // Arrange
    var first = [[empty()]];
    var second = [[D()]];

    // Act
    // Assert
    expect(noOverlap(first, second)).toEqual(true);
  });
  it('row', () => {
    // Arrange
    var first = [[empty(), empty()]];
    var second = [[D(), D()]];

    // Act
    // Assert
    expect(noOverlap(first, second)).toEqual(true);
  });
  it('column', () => {
    // Arrange
    var first = [[empty()], [empty()]];
    var second = [[D()], [D()]];

    // Act
    // Assert
    expect(noOverlap(first, second)).toEqual(true);
  });
  it('rectangle', () => {
    // Arrange
    var first = [[empty(), empty()], [empty(), empty()]];
    var second = [[D(), D()], [D(), D()]];

    // Act
    // Assert
    expect(noOverlap(first, second)).toEqual(true);
  });
  it('empty elements in either argument', () => {
    // Arrange
    var first = [[empty()], [D()]];
    var second = [[D()], [empty()]];

    // Act
    // Assert
    expect(noOverlap(first, second)).toEqual(true);
  });
  it('arguments of different size throws', () => {
    // Arrange
    var first = [[empty(), empty(), empty()]];
    var second = [[D(), D()]];

    // Act
    // Assert
    expect(() => noOverlap(first, second)).toThrow()
  });
});
