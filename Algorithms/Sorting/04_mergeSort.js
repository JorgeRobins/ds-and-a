function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  // Split Array in into right and left
  const length = array.length;
  const mid = Math.floor(length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);
  //console.log("left:" + left);
  //console.log("right:" + right);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];

  while (left.length && right.length) {
    // Comparison
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  //console.log(left, right);
  return result.concat(left.slice()).concat(right.slice());
}

(function test() {
  const testArray1 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
  const testArray2 = [22, 33, 2, 1, 17, 93, 290, 205, 174, 182];

  console.log(mergeSort(testArray1));
  console.log(mergeSort(testArray2));
})();
