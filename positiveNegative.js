//make a positive negative and a negative positive
function invert(array) {
  return array.map((x) => -x);
}
console.log(invert([-1, 2, -3, 4, 5]));
