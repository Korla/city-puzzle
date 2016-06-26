var {expect, expectGrid} = require('../utils/expect');

var section = (grid, [xMin, yMin], [xMax, yMax]) => {
  expectGrid(grid);
  expect(xMin <= xMax, `xMin: ${xMin} is greater than xMax: ${xMax}`);
  expect(yMin <= yMax, `yMin: ${yMin} is greater than yMax: ${yMax}`);
  expect(grid[0][xMin] !== undefined, 'xMin out of bounds: ' + xMin);
  expect(grid[0][xMax] !== undefined, 'xMax out of bounds: ' + xMax);
  expect(grid[yMin] !== undefined, 'yMin out of bounds: ' + yMin);
  expect(grid[yMax] !== undefined, 'yMax out of bounds: ' + yMax);
  return grid
    .slice(yMin, yMax + 1)
    .map(row => row.slice(xMin, xMax + 1));
}

export {section};
