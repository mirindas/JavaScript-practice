function iqTest(numbers){

    let arr = numbers.split(" ");
    let evenCounter = 0;
    let oddCounter = 0;
    let evenNum;
    let oddNum;

    for (let index = 0; index < arr.length; index++) {
        
        if(arr[index] % 2 === 0){
            evenCounter++;
            evenNum = index+1;
        }else{
            oddCounter++;
            oddNum = index+1;
        }
    }
    
    if(evenCounter > oddCounter){
        return oddNum;
    }else{
        return evenNum;
    }


  }

  console.log(iqTest("2 4 7 8 10"));
  console.log(iqTest("1 2 2"));
