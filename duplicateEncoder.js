function duplicateEncode(word) {
  let duplicates = [];
  word = word.toLowerCase();
  let givenWord = word.split("");
  console.log("check here-------",givenWord)
  for (var i = 0; i < word.length; i++) {
    if (word.indexOf(word[i]) !== word.lastIndexOf(word[i])) {
      duplicates.push(word[i]);
      //console.log("word", word);
    }

    //console.log("duplicates", duplicates);
  }

  let uniques = [...new Set(duplicates)]; // turns unique every char
  //console.log("uniques",uniques);
  let target = "";

  givenWord.forEach(element => {
      if(uniques.includes(element)){
          target += ")";
      }else{
          target += "(";
      }
  });

  
  return target;
}

let result = duplicateEncode("Supralapsarian");
console.log("result", result);