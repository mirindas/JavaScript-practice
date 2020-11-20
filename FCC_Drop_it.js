function dropElements(arr, func) {
  let erase = arr.findIndex(func);
  if(erase == -1){
    return [];
  }
  for (let i = 0; i < erase; i++) {
    arr.shift();    
  }
  console.log(arr.findIndex(func))
  return arr;
}

console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}))