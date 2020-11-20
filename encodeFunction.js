function encode(str) {
  return str.split("").map((item) =>
    item === "a"
      ? (item = "1")
      : item === "e"
      ? (item = "2")
      : item === "i"
      ? (item = "3")
      : item === "o"
      ? (item = "4")
      : item === "u"
      ? (item = "5")
      : item
  ).join("");  
}

function decode(str) {
  return str.split("").map((item) =>
    item === "1"
      ? (item = "a")
      : item === "2"
      ? (item = "e")
      : item === "3"
      ? (item = "i")
      : item === "4"
      ? (item = "o")
      : item === "5"
      ? (item = "u")
      : item
  ).join("");
}
console.log(encode("hello"));
console.log(decode("h2ll4"));