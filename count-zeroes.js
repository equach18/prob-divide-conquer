function countZeroes(arr) {
  let start = 0;
  let end = arr.length - 1;

  if (arr[0] === 0) return arr.length;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (arr[middle] === 0 && arr[middle - 1] && arr[middle - 1] === 1) {
      return arr.length - middle;
    } else if (arr[middle] === 1) {
      start = middle + 1;
    } else if (arr[middle] === 0) {
      end = middle - 1;
    }
  }
  return 0;
}

module.exports = countZeroes;
