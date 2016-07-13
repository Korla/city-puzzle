var {expect, expectGrid} = require('../utils/expect');
var {evaluateSpot} = require('../evaluateSpot/evaluateSpot');
var {section} = require('../section/section');

function *spots(board, width, height) {
  for(var y = 0; y < board.length - height; y++) {
    for(var x = 0; x < board[0].length - width; x++) {
      yield [[x+1,y+1], section(board, [x,y], [x + width, y + height])];
    }
  }
}

var evaluateBoard = (board, piece) => {
  expectGrid(board);
  expectGrid(piece);
  expect(board.length >= piece.length + 2);
  expect(board[0].length >= piece[0].length + 2);
  return [...spots(board, piece[0].length + 1, piece.length + 1)]
    .filter(([,spot]) => evaluateSpot(piece)(spot))
    .map(([coords,]) => coords);
}

export {evaluateBoard};
