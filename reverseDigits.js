function digitize(num) {
    return num.toString().split("").reverse().map(Number);
  }
  console.log(digitize(35231))