var rotate = grid => {
  var rotated = [];
  for(var y = 0; y < grid.length; y++) {
    var row = grid[y];
    for(var x = 0; x < row.length; x++) {
      var piece = row[x];
      rotated[x] = rotated[x] || [];
      rotated[x].unshift(piece);
    }
  }
  return rotated;
}

var rotateAnti = grid => rotate(rotate(rotate(grid)));

export {rotate, rotateAnti};