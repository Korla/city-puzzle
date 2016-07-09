var {expect, expectGrid} = require('../utils/expect');
var {noOverlap} = require('../noOverlap/noOverlap');

var evaluateSpot = (grid, piece) => {
  expectGrid(grid);
  expectGrid(piece);

  var hasSpace = noOverlap(grid, piece);
  return true;
}

export {evaluateSpot};
