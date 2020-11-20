// returns a new array containing only the square of only the positive integers
// (decimal numbers are not integers) when an array of real numbers is passed to it
// An example of an array containing only real numbers is [-3, 4.8, 5, 3, -3.2]

const squareList = (arr) => {
    return arr.filter(num => Number.isInteger(num)&&num>0).map(num => num*num);
  };  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);