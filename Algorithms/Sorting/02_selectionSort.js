const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  let lowestIndex = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[lowestIndex]) {
        lowestIndex = j;
      }
    }
    // swap lowest to front
    let temp = array[i];
    array[i] = array[lowestIndex];
    array[lowestIndex] = temp;
  }
}

selectionSort(numbers);
console.log(numbers);
