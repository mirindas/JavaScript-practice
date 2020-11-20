// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.
// #Example 1: a1 = ["arp", "live", "strong"]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// returns ["arp", "live", "strong"]

function inArray(array1,array2){
    let newArr = [];
    array1.forEach(elementArr1 => {
        array2.forEach(elementArr2 => {
            if (elementArr2.includes(elementArr1)) {
                newArr.push(elementArr1);
            }
        });
    });
    newArr = [...new Set(newArr)]; // keeps unique elements
    return newArr.sort(); // alphabetically
  }
  console.log(inArray(["arp", "live"],["arp", "live", "strong"]));