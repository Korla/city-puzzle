var validate = (grid, [xMin, yMin], [xMax, yMax]) => {
  if(xMin > xMax) throw Error(`xMin: ${xMin} is greater than xMax: ${xMax}`);
  if(yMin > yMax) throw Error(`yMin: ${yMin} is greater than yMax: ${yMax}`);
  if(grid[0][xMin] === undefined) throw Error('xMin out of bounds: ' + xMin);
  if(grid[0][xMax] === undefined) throw Error('xMax out of bounds: ' + xMax);
  if(grid[yMin] === undefined) throw Error('yMin out of bounds: ' + yMin);
  if(grid[yMax] === undefined) throw Error('yMax out of bounds: ' + yMax);
  return true;
}

var cut = (grid, [xMin, yMin], [xMax, yMax]) =>
  !validate(grid, [xMin, yMin], [xMax, yMax]) ||
  grid
    .slice(yMin, yMax + 1)
    .map(row => row.slice(xMin, xMax + 1));

export {cut};
