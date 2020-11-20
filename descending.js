function descendingOrder(n){
    n = n.toString().split("").map(Number).sort().reverse().join("")
    return Number(n);
  }
  console.log(descendingOrder(145263))