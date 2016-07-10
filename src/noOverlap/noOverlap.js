var {expectSameSizeGrids} = require('../utils/expect');
var {flatten, zip} = require('../utils/array');

var elemExists = elem => elem.empty === false;
var bothExist = elems => elems.every(elemExists);

var noOverlap = (g1, g2) => {
  expectSameSizeGrids(g1, g2);
  return !zip(flatten(g1), flatten(g2)).some(bothExist);
}

export {noOverlap};
