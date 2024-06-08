function sortedFrequency(arr, val) {
  const firstIdx = findFirst(arr, val);
  const lastIdx = findLast(arr, val);
  if (firstIdx == -1) return 0;
  return lastIdx - firstIdx + 1;
}

function findFirst(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (arr[middle] === val && (middle === 0 || arr[middle - 1] !== val)) {
      return middle;
    } else if (val <= arr[middle]) {
      end = middle - 1;
    } else if (val > arr[middle]) {
      start = middle + 1;
    }
  }
  return -1;
}

function findLast(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (
      arr[middle] === val &&
      (middle === arr.length - 1 || arr[middle + 1] !== val)
    ) {
      return middle;
    } else if (val < arr[middle]) {
      end = middle - 1;
    } else if (val >= arr[middle]) {
      start = middle + 1;
    }
  }
  return -1;
}

module.exports = sortedFrequency;
