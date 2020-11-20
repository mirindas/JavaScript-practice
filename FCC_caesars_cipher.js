function rot13(str) {
  let decoded = "";

  for (let i = 0; i < str.length; i++) {
    //console.log("char = ", str[i], str.charCodeAt(i));
    let charCode = str.charCodeAt(i) + 13;

    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 77) {
      decoded += String.fromCharCode(charCode);
    } else if (str.charCodeAt(i) >= 77 && str.charCodeAt(i) <= 90) {
      charCode = str.charCodeAt(i) + 19;
      decoded += String.fromCharCode(charCode);
    } else {
      decoded += str[i];
    }
  }

  return decoded.toUpperCase();
}
console.log(rot13("SERR PBQR PNZC"));

