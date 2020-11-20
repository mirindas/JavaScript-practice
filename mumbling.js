// COME BACK AFTER AWHILE CANT ONE LINE CODE YET

function accum(s) {
    s = s.toLowerCase().split("")

    for (let i = 0; i < s.length; i++) {
        //let index = s.indexOf(s[i])
        // if(i===1){
        //     s[i] = s[i].repeat(i+1)
        // }
        if(i>0){
            s[i] = s[i].repeat(i+1)            
        }        
    }
    //s.map(element,index => index = s.indexOf(element))
    //s[i] = s[i].charAt(0).toUpperCase();
    console.log(s.map(element => element.charAt(0).toUpperCase() + element.substring(1).toLowerCase()))
    return s.map(element => element.charAt(0).toUpperCase() + element.substring(1).toLowerCase()).join("-")
}
console.log(accum("ZpglnRxqenU")); //ZpglnRxqenU