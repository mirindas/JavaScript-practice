function highAndLow(numbers){
    let numArr = numbers.split(" ");
    console.log(numArr)
    let result = [];
    let sum = Math.max(...numArr).toString();
    sum += (" ")+Math.min(...numArr).toString();
    //result.push(Math.max(...numArr).toString())
    //result.push(Math.min(...numArr));
    result.push(sum)
    return sum;
  }
  console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));