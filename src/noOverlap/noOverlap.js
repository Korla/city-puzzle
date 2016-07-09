var {expect, expectGrid} = require('../utils/expect');
var {flatten, zip} = require('../utils/array');

var elemExists = elem => elem.empty === false;
var bothExist = elems => elems.every(elemExists);

var noOverlap = (g1, g2) => {
  expectGrid(g1);
  expectGrid(g2);
  expect(g1.length === g2.length, 'Grids to overlap must be of same size');
  expect(g1[0].length === g2[0].length, 'Grids to overlap must be of same size');
  return !zip(flatten(g1), flatten(g2)).some(bothExist);
}

export {noOverlap};
