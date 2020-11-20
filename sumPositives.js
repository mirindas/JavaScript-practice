function positiveSum(arr) {
  let sum = 0;

  if ((arr.length === 0)) {
    return sum;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 1) {
      sum = sum + arr[i];
      console.log(arr[i], sum);
    }
  }
  return sum;
}

console.log(positiveSum([1,-2,3,4,5]));
