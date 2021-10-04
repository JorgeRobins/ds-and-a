function quickSort(array, left, right) {
  const len = array.length;
  let pivot;
  let partitionIndex;

  if (left < right) {
    pivot = right;
    partitionIndex = partition(array, pivot, left, right);

    //sort left and right
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }
  return array;
}

function partition(array, pivot, left, right) {
  let pivotValue = array[pivot];
  let partitionIndex = left;

  for (let i = left; i < right; i++) {
    if (array[i] < pivotValue) {
      swap(array, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(array, right, partitionIndex);
  return partitionIndex;
}

function swap(array, firstIndex, secondIndex) {
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

(function test() {
  const testArray1 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
  const testArray2 = [22, 33, 2, 1, 17, 93, 290, 205, 174, 182];

  //Select first and last index as 2nd and 3rd parameters
  console.log(quickSort(testArray1, 0, testArray1.length - 1));
  console.log(quickSort(testArray2, 0, testArray2.length - 1));
})();
