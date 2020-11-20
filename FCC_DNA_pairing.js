function pairElement(str) {
  let arr = [];
    //split str chars to array, and add each Letter to its pair
  str = str
    .split("")
    .map((x) =>
      x === "G"
        ? x + "C"
        : x === "C"
        ? x + "G"
        : x === "A"
        ? x + "T"
        : x === "T"
        ? x + "A"
        : console.log("error")
    );
    console.log("str",str)
    //split each DNA pair to single characters and push them to the array in order to make it 2D
    //*Get into every record and split it 
    for (let i = 0; i < str.length; i++) {
        arr.push(str[i].split(""))       
    }
  return arr;
}
console.log(pairElement("CTCTA"));