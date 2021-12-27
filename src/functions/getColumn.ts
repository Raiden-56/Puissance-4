function getColumn(matrix: number[][], col: number) {
  var column = [];
  for (var i = 0; i < matrix.length; i++) {
    column.push(matrix[i][col]);
  }
  return column;
}

export default getColumn;
