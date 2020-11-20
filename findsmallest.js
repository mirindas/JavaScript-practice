function findSmallestInt(args) {
  let arr = args;
  var smallest = arr[0];
  for (var i = 0; i < arr.length; i++)
    if (arr[i] >= smallest) {
    } else {
      smallest = arr[i];
    }
  return smallest;
  //Or one-liner
  //return Math.min(...args)
}

console.log(findSmallestInt([78, 56, 232, 12, 8]));
