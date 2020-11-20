
// NOT DONE

function telephoneCheck(str) {
    console.log(str[3]==="-");
    if(str[3] === "-" && str[7] === "-"){
        return true;
    }else if(str[0] === "(" && str[4] === ")" && str[8] === "-"){
        return true;
    }else if(str[0] === "(" && str[4] === ")" && str[9] === "-"){
        return true;
    }else if(str.length === 10){
        return true;
    }else if(str.length === 12 && str[11] != ")"){
        return true;
    }else if(str.length === 14 && str[0] === "1" || str.length === 14 && str[0] === "1"){
        return true;
    }else if(str[5] === ")"){
        return false;
    }
    else{
        return false;
    }
  }
  
  telephoneCheck("555-555-5555");
  