// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

function findShort(s) {
  let arr = s.split(" ");
  let result = arr[0].length;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < result) {
      result = arr[i].length;
    }
  }
  return result;
}
console.log(
  findShort(
    "turns out random test cases are easier than writing out basic ones"
  )
);