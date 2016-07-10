var {expect, expectGrid} = require('../utils/expect');
var {noOverlap} = require('../noOverlap/noOverlap');
var {section} = require('../section/section');
var {evaluatePiece} = require('../evaluatePiece/evaluatePiece');

var join = (grid, piece, [startX, startY]) => {
  var joined = grid.map(r => r.map(c => c));
  for(var y = 0; y < piece.length; y++) {
    for(var x = 0; x < piece[0].length; x++) {
      joined[startY + y][startX + x] = piece[y][x];
    }
  }
  return joined;
}

var evaluatePieces = grid => {
  for(var y = 0; y < grid.length - 2; y++) {
    for(var x = 0; x < grid[0].length - 2; x++) {
      var piece = section(grid, [x,y], [x+2, y+2]);
      if(!evaluatePiece(piece)) {
        return false;
      }
    }
  }
  return true;
}

var evaluateSpot = (grid, piece) => {
  expectGrid(grid);
  expectGrid(piece);
  expect(grid.length === piece.length + 2);
  expect(grid[0].length === piece[0].length + 2);
  return noOverlap(section(grid, [1,1], [grid[0].length - 2, grid.length - 2]), piece) &&
    evaluatePieces(join(grid, piece, [1,1]));
}

export {evaluateSpot};
