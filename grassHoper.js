function summation(num) {
  let counter = 0;
  let sum = 0;
  do {
    counter++;
    sum = sum + counter;
  } while (counter < num);

  return sum;
}
console.log(summation(8));
