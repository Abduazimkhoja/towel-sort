
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (!matrix || matrix.length === 0) return [];

  let result = [];
  let rows = matrix.length;
  let cols = matrix[0].length;

  // Iterate over each diagonal
  for (let d = 0; d < rows + cols - 1; d++) {
    let rowStart = d < cols ? 0 : d - cols + 1;
    let colStart = d < cols ? d : cols - 1;

    let diagonal = [];
    for (let r = rowStart, c = colStart; r < rows && c >= 0; r++, c--) {
      diagonal.push(matrix[r][c]);
    }

    // Reverse diagonal elements if the diagonal index is odd
    if (d % 2 === 1) {
      diagonal.reverse();
    }

    result.push(...diagonal);
  }

  return result;
}
