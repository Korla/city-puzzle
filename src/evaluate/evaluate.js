var {expectGrid} = require('../utils/expect');

var directions = {
  up: 0,
  right: 1,
  down: 2,
  left: 3
}

var matches = piece => (dir1, p2, dir2) => piece.roads[dir1] === p2.roads[dir2];

var evaluate = evalgrid => {
  expectGrid(evalgrid);
  var pieceMatches = matches(evalgrid[1][1]);
  var topMatches = pieceMatches(directions.up, evalgrid[0][1], directions.down);
  var rightMatches = pieceMatches(directions.right, evalgrid[1][2], directions.left);
  var bottomMatches = pieceMatches(directions.down, evalgrid[2][1], directions.up);
  var leftMatches = pieceMatches(directions.left, evalgrid[1][0], directions.right);
  return topMatches && rightMatches && bottomMatches && leftMatches;
}

export {evaluate};
