function arrayDiff(arr1, arr2) {
  return arr1.concat(arr2).filter((x) => !arr1.includes(x) || !arr2.includes(x));
}
console.log(arrayDiff([1, 2, 3, 5], [1, 2, 3, 4, 5]));
