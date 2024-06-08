function findFloor(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  if (arr[start] > val) return -1;
  if (arr[end] <= val) return arr[end];
  while (start <= end) {
    let middle = Math.floor((end + start) / 2);
    if (val >= arr[middle] && arr[middle + 1] >= val) {
      return arr[middle];
    } else if (arr[middle + 1] <= val && arr[middle] < arr[middle + 1]) {
      return arr[middle + 1];
    }
    if (arr[middle] > val) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return -1;
}

module.exports = findFloor;
