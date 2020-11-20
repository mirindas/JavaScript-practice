//In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(l) {
  let arr = l.filter(element => typeof(element) != typeof(""))
  return arr;
}

let result = filter_list([1,2,"3",true,"something",5,16,"else",123]);
console.log(result);