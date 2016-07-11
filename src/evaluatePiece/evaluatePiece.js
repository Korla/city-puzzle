var {expect, expectGrid} = require('../utils/expect');

var directions = {
  U: 0,
  R: 1,
  D: 2,
  L: 3
}

var roadsMatch = spot => ([dir1, p2, dir2]) => spot.empty || p2.empty || spot.roads[dir1] === p2.roads[dir2];

var evaluatePiece = evalgrid => {
  expectGrid(evalgrid);
  expect(evalgrid.length === 3, `Evalgrids are expected to be of size 3, but is instead ${evalgrid.length}`);
  return [
    [directions.U, evalgrid[0][1], directions.D],
    [directions.R, evalgrid[1][2], directions.L],
    [directions.D, evalgrid[2][1], directions.U],
    [directions.L, evalgrid[1][0], directions.R]
  ].every(roadsMatch(evalgrid[1][1]));
}

export {evaluatePiece};
