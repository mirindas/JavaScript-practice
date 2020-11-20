// Perform a search and replace on the sentence using the arguments provided and return the new sentence
// First argument is the sentence to perform the search and replace on
// Second argument is the word that you will be replacing (before)
// Third argument is what you will be replacing the second argument with (after)

function myReplace(str, before, after) {
  after = after.toLowerCase(); 
  if (/^[A-Z]/.test(before)) {                              //Check if before String has the first Character in UpperCase
    after = after[0].toUpperCase() + after.substring(1);    //replace after String's first char to UpperCase and concat it with the rest of the string
  }
  return str.replace(before, after);
}
console.log(myReplace("I think we should look up there", "up", "Down"));