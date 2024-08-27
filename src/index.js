module.exports = function towelSort(matrix) {
  if (!matrix || matrix.length === 0) return [];

  let result = [];

  for (let i = 0; i < matrix.length; i++) {
    let row = matrix[i];
    if (i % 2 === 0) {
      // Если строка с четным индексом, добавляем элементы в прямом порядке
      result.push(...row);
    } else {
      // Если строка с нечетным индексом, добавляем элементы в обратном порядке
      result.push(...row.reverse());
    }
  }

  return result;
};
