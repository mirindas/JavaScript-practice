function urlSlug(title) {       
    //           low case       array          remove whitespaces    toString
    return title.toLowerCase().split(" ").filter(x => x.trim() != "").join("-");
}
console.log(urlSlug(" Winter Is  Coming"))
