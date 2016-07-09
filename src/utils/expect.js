var expect = (condition, message) => {
  if(!condition) throw new Error(message);
}

var expectGrid = grid => {
  var rowLength = grid[0].length;
  expect(rowLength !== undefined);
  grid.forEach(row => expect(row.length === rowLength, `All rows must be of equal length.`));
}

export {expect, expectGrid};
