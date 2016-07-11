var {expect, expectGrid} = require('../utils/expect');
var {noOverlap} = require('../noOverlap/noOverlap');
var {section} = require('../section/section');
var {evaluatePiece} = require('../evaluatePiece/evaluatePiece');

function *coordinates(grid, [startX, startY], [endX, endY]) {
  for(var y = startY; y < endY; y++) {
    for(var x = startX; x < endX; x++) {
      yield [x,y];
    }
  }
}

var join = (grid, piece, [startX, startY]) => {
  var joined = grid.map(r => r.map(c => c));
  [...coordinates(grid, [0,0], [piece[0].length, piece.length])]
    .forEach(([x,y]) => joined[startY + y][startX + x] = piece[y][x]);
  return joined;
}

var evalPieces = grid =>
  ![...coordinates(grid, [0,0], [grid[0].length - 2, grid.length - 2])]
    .some(([x,y]) => !evaluatePiece(section(grid, [x,y], [x+2, y+2])));

var expectGridAndPiece = (grid, piece) => {
  expectGrid(grid);
  expectGrid(piece);
  expect(grid.length === piece.length + 2);
  expect(grid[0].length === piece[0].length + 2);
  return true;
}

var evaluateSpot = (grid, piece) =>
  expectGridAndPiece(grid, piece) &&
  noOverlap(section(grid, [1,1], [grid[0].length - 2, grid.length - 2]), piece) &&
  evalPieces(join(grid, piece, [1,1]))

export {evaluateSpot};
