var {expect, expectGrid} = require('../utils/expect');
var {noOverlap} = require('../noOverlap/noOverlap');
var {section} = require('../section/section');
var {evaluatePiece} = require('../evaluatePiece/evaluatePiece');

function *coordinates(spot, [startX, startY], [endX, endY]) {
  for(var y = startY; y < endY; y++) {
    for(var x = startX; x < endX; x++) {
      yield [x,y];
    }
  }
}

var join = (spot, piece, [startX, startY]) => {
  var joined = spot.map(r => r.map(c => c));
  [...coordinates(spot, [0,0], [piece[0].length, piece.length])]
    .forEach(([x,y]) => joined[startY + y][startX + x] = piece[y][x]);
  return joined;
}

var sectionFromCoordinate = spot => ([x,y]) => section(spot, [x-1,y-1], [x+1, y+1]);
var evalPieces = spot =>
  [...coordinates(spot, [1,1], [spot[0].length-1, spot.length-1])]
    .map(sectionFromCoordinate(spot))
    .every(evaluatePiece);

var expectGridAndPiece = (spot, piece) => {
  expectGrid(spot);
  expectGrid(piece);
  expect(spot.length === piece.length + 2);
  expect(spot[0].length === piece[0].length + 2);
  return true;
}

var evaluateSpot = piece => spot =>
  expectGridAndPiece(spot, piece) &&
  noOverlap(section(spot, [1,1], [spot[0].length - 2, spot.length - 2]), piece) &&
  evalPieces(join(spot, piece, [1,1]))

export {evaluateSpot};
