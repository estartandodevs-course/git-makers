function maxmin(a, b, c, d, e){
    var menor = ["1", "2", "3", "4", "5"] 
    var maior =  ["5", "4", "3", "2", "1"] 
    Math.min(menor, maior)  
    Math.max(menor, maior)
    return [menor, maior]
}
console.log(maxmin())