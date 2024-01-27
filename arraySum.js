// var prices = [345, 354,6780, 344];
// var starting = prices[0];
// for(var  i = 0; i < prices.length; i++){
//     var newprice = prices[i];
//     starting = starting + newprice;
// }
// console.log(starting);


// var result = [70, 40, 45, 90, 87];

// function resultSum(n){
//     var sum = 0;
//     for(var i = 0; i < n.length; i++){
//         var totalsum = n[i];
//         sum = sum + totalsum;
//     }
//     return sum;
// }

// var result22 = resultSum(result);
// console.log(result22);


var mulaPrice = [ 23, 34, 45, 56, 23,];
function price(m){
    var agerPrice = 0;
    for(var i = 0; i < m.length;i++){
        var totalMulaPrice = m[i];
        agerPrice = agerPrice + totalMulaPrice;
    }
    return agerPrice;
}
var totalp = price(mulaPrice);
console.log(totalp);



var coffeyPrice = [150, 200, 300, 450];
function allCoffeyPricec(c){
    var coffey = 0;
    for(var i = 0; i < c.length; i ++){
        var totalCoffeyPrice = c[i];
        coffey = totalCoffeyPrice + coffey;
    }
    return coffey;
}
var current = allCoffeyPricec(coffeyPrice);
console.log(current);
var newfunction = allCoffeyPricec([450, 453, 345, 2523]);
console.log(newfunction);