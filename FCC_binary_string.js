function binaryAgent(str) {
  str = str.split(" ");                                                       //fromCharCode accepts ONLY numbers and NOT variables
  let utf = str.map((bin) => String.fromCharCode(parseInt(bin, 2))).join(""); //using the radix parameter in parseInt, we can convert the binary
  return utf;                                                                 //number to a decimal number while simultaneously converting to a char
}

console.log(
  binaryAgent(
    "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
  )
);
