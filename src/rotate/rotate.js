var {expectGrid} = require('../utils/expect');

var rotateSpot = spot => {
  if(spot.empty) return;
  spot.roads.unshift(spot.roads.pop());
}
var rotate = grid => {
  expectGrid(grid);

  var rotated = [];
  for(var x = 0; x < grid[0].length; x++) {
    rotated[x] = [];
    for(var y = 0; y < grid.length; y++) {
      rotated[x].unshift(grid[y][x])
      rotateSpot(rotated[x][0]);
    }
  }
  return rotated;
}

var rotateAntiCW = grid => rotate(rotate(rotate(grid)));

export {rotate, rotateAntiCW};
