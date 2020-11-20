function mutation(arr) {
let target = arr[0].toLowerCase();
// make the string array of chars
let test = arr[1].toLowerCase().split("");
let counter = 0;
// check if every char exists inside target string
test.forEach(element => {
    if (!(target.includes(element))) {
        counter++;
    }
});
    if (counter > 0){
        return false;
    }else{
        return true;
    }
}
console.log(mutation(["hello", "neo"]))
