var {expect, expectGrid} = require('../utils/expect');

var directions = { U: 0, R: 1, D: 2, L: 3 };
var roadsMatchMiddle = middle =>
  ([toSpot, spot, fromSpot]) => middle.empty || spot.empty || middle.roads[toSpot] === spot.roads[fromSpot];
var exists = ([,spot,]) => !spot.empty;

var evaluatePiece = evalgrid => {
  expectGrid(evalgrid);
  expect(evalgrid.length === 3, `Evalgrids are expected to be of size 3, but is instead ${evalgrid.length}`);
  var neighborsAndDirections = [
    [directions.U, evalgrid[0][1], directions.D],
    [directions.R, evalgrid[1][2], directions.L],
    [directions.D, evalgrid[2][1], directions.U],
    [directions.L, evalgrid[1][0], directions.R]
  ];
  var allRoadsMatch = neighborsAndDirections.every(roadsMatchMiddle(evalgrid[1][1]));
  var anyNeighborExists = neighborsAndDirections.some(exists);
  return allRoadsMatch && anyNeighborExists;
}

export {evaluatePiece};
