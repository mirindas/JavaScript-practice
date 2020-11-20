function find_average(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }

  return sum / array.length;
}
console.log((find_average([1, 2, 3]), 2));