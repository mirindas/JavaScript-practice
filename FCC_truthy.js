function truthCheck(collection, pre) {
  let counter = 0;
  collection.map((x) =>
    x.hasOwnProperty(pre) && Boolean(x[pre]) ? counter++ : counter //check if value of object x.pre is truthy
  );
  return counter == collection.length;
}
console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));
