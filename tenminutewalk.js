// You live in the city of Cartesia where all roads are laid out in a perfect grid. 
// You arrived ten minutes too early to an appointment, 
// so you decided to take the opportunity to go for a short walk. 
// The city provides its citizens with a Walk Generating App on their phones --
// everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). 
// You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, 
// so create a function that will return true if the walk the app gives you will take you exactly ten minutes 
// (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.
// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only).
// It will never give you an empty array (that's not a walk, that's standing still!).

function isValidWalk(walk) {
  if (walk.length != 10 ) {
    console.log("something broke");
    return false;
  }

  let nCounter = 0;
  let sCounter = 0;
  let wCounter = 0;
  let eCounter = 0;

  walk.forEach((element) => {
    switch (element) {
      case "s":
        sCounter++;
        break;
      case "n":
        nCounter++;
        break;
      case "w":
        wCounter++;
        break;
      case "e":
        eCounter++;
        break;

      default:
        break;
    }
  });

  console.log("N",nCounter);
  console.log("S",sCounter);
  console.log("W",wCounter);
  console.log("E",eCounter);

  if (nCounter != sCounter || wCounter != eCounter) {
    return false;
  } else {
    return true;
  }
}

let result = isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]);
console.log(result);
result = isValidWalk([
  "w",
  "e",
  "w",
  "e",
  "w",
  "e",
  "w",
  "e",
  "w",
  "e",
  "w",
  "e",
]);
console.log(result);
