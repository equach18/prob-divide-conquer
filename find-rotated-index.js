function findRotatedIndex(arr, val) {
  const rotationIdx = findFirstRotation(arr);
  const lastIdx = arr.length - 1;
  if (binarySearch(arr, val, 0, rotationIdx) === -1) {
    return binarySearch(arr, val, rotationIdx, lastIdx);
  } else {
    return binarySearch(arr, val, 0, rotationIdx);
  }
}

//binary search
function binarySearch(arr, val, start, end) {
  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (arr[middle] === val) {
      return middle;
    } else if (arr[middle] > val) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return -1;
}

//find the index at which the array rotates
function findFirstRotation(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (arr[middle + 1] < arr[middle]) return middle + 1;
    else if (arr[start] >= arr[middle]) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return -1;
}
module.exports = findRotatedIndex;
