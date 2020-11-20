function countPositivesSumNegatives(input) {
  let count = 0;
  let sum = 0;
  let arr = [];

  if (input) {
    input.forEach((element) => {
      if (element > 0) {
        count++;
      } else {
        sum = sum + element;
      }
    });
    if (count && sum) {
      arr.push(count, sum);
    }
    return arr;
  } else {
    return [];
  }
}
let testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
console.log(countPositivesSumNegatives(testData));