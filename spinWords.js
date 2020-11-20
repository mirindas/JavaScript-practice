// Write a function that takes in a string of one or more words, and returns the same string, 
// but with all five or more letter words reversed  
// Strings passed in will consist of only letters and spaces. 
// Spaces will be included only when more than one word is present.

function spinWords(words) {  
  return words.split(" ").map((x) => (x.length >= 5 ? x.split("").reverse().join("") : x)).join(" ");
}
console.log(spinWords("You are almost to the last test"));