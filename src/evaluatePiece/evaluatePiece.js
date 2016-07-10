var {expect, expectGrid} = require('../utils/expect');

var directions = {
  up: 0,
  right: 1,
  down: 2,
  left: 3
}

var matches = spot => (dir1, p2, dir2) => spot.empty || p2.empty || spot.roads[dir1] === p2.roads[dir2];

var evaluatePiece = evalgrid => {
  expectGrid(evalgrid);
  expect(evalgrid.length === 3, `Evalgrids are expected to be of size 3, but is instead ${evalgrid.length}`);
  var spotMatches = matches(evalgrid[1][1]);
  var topMatches = spotMatches(directions.up, evalgrid[0][1], directions.down);
  var rightMatches = spotMatches(directions.right, evalgrid[1][2], directions.left);
  var bottomMatches = spotMatches(directions.down, evalgrid[2][1], directions.up);
  var leftMatches = spotMatches(directions.left, evalgrid[1][0], directions.right);
  return topMatches && rightMatches && bottomMatches && leftMatches;
}

export {evaluatePiece};
