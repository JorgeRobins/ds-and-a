function insertionSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    if (array[i] < array[0]) {
      // move to first position of array
      array.unshift(array.splice(i, 1)[0]);
    } else {
      // find where it should insert
      for (let j = 1; j < i; j++) {
        if (array[i] > array[j - 1] && array[i] < array[j]) {
          // move to right place
          array.splice(j, 0, array.splice(i, 1)[0]);
        }
      }
    }
  }
  return array;
}

(function test() {
  const testArray1 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
  const testArray2 = [22, 33, 2, 1, 17, 93, 290, 205, 174, 182];

  console.log(insertionSort(testArray1));
  console.log(insertionSort(testArray2));
})();
