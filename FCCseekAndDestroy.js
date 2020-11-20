// Remove all elements from the initial array that are of the same value as these arguments

function destroyer(arr,...x) {
  let deleter = [...x];   
  return arr.concat(deleter).filter((x) => !arr.includes(x) || !deleter.includes(x));
  }
  
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
  