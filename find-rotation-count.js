function findRotationCount(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    //Check to see if middle element is the smallest.
    if (arr[middle] < arr[middle - 1]) {
      return middle;
    }
    //Check to see if the next element is smallest.
    if (arr[middle] > arr[middle + 1]) {
      return middle + 1;
    }
    if (arr[middle] <= arr[start]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return 0;
}

module.exports = findRotationCount;
