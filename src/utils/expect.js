var expect = (condition, message) => {
  if(!condition) throw new Error(message);
}

var expectGrid = grid => {
  var rowLength = grid[0].length;
  expect(rowLength !== undefined);
  grid.forEach(row => expect(row.length === rowLength, `All rows must be of equal length.`));
}

var expectSameSizeGrids = (g1, g2) => {
  expectGrid(g1);
  expectGrid(g2);
  expect(g1.length === g2.length, `Grids must have same number of rows: ${g1.length} and ${g2.length}`);
  expect(g1[0].length === g2[0].length, `Grids must have same number of columns: ${g1.length} and ${g2.length}`);
}

export {expect, expectGrid, expectSameSizeGrids};
