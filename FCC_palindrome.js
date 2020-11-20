function palindrome(str) {
  let word = str
    .toLowerCase()
    .replace(/[^\w\S]/gi, "")
    .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>''\{\}\[\]\\\/]/gi, '')
    .split("");
  return word.join("") === word.reverse().join("") ? true : false;
  
}
console.log(palindrome("0_0 (: /-\ :) 0-0"));