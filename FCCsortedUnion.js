function uniteUnique(...arr) {
    let united = [];    
    let newArr = [];
    united = united.concat(...arr); //gather every array into one object
    //console.log(united);          
    newArr = Array.from(united)     //Because united is an object we need to convert it to an array
    //console.log(newArr);
    
    return newArr.filter((item,index) => newArr.indexOf(item) === index)
    //console.log(typeof(newArr))
    //return united.filter((item,index) => united.indexOf(item) === index);
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
  

  // Another way is with a new method Called "Set" introduced in ES6

  //const uniqueValues = new Set(newArr);
  //const backToArray = [...uniqueValues]; 
  // OR Array.from(new Set(newArr))