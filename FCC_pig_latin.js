// Pig Latin is a way of altering English Words. The rules are as follows:
// If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.
// If a word begins with a vowel, just add "way" at the end.
// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {
  let vowelRegex = /[aeiou]/;
  let consonantReg = /[qwrtpsdfghjklzxcvbnm]/;
  let arr = str.split("");
  var vowelStart;
  var tempShift;

  //check if the world starts with a vowel and save the boolean
  consonantReg.test(arr[0]) ? (vowelStart = false) : (vowelStart = true);

  //Check if the word has any vowels at all if not push "ay"
  if (!vowelRegex.test(str)) {
    arr.push("ay");
  } else {
    for (let i = 0; i < arr.length; i++) {
      //if the word starts with consonant take all of them until meeting a vowel
      //and push them to the end of the word
      if (consonantReg.test(arr[i])) {
        tempShift = arr.shift();
        arr.push(tempShift);
      }
      //correction for the i counter bug
      //undo the last push
      tempShift = arr.pop();
      arr.unshift(tempShift);
    }
    //if the word starts with a vowel push "ay" to the end
    //else if it starts with a consonant push "way" to the and
    if (vowelStart === false) {
      arr.push("ay");
    } else {
      arr.push("way");
    }
  }

  return arr.join("");
}

console.log(translatePigLatin("rhythm"));
