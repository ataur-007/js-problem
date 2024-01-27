var marks = [23,34,63,56,54,90,11,24,];
var max = marks[0];
for( var i = 0; i < marks.length; i++){
    var studen = marks[i];
    if( studen > max){
        max = studen;
    }
}
console.log(max);


var aluPrice = [34, 23, 56, 22, 34];
var price = aluPrice[0];
for(var i = 0; i < aluPrice.length; i++){
    var price1 = aluPrice[i];
    if(price1 < price){
        price = price1;
    }
}
console.log(price);



var komla = [34, 34, 56, 67, 234,];
function komolaPrice(k){
    var newprice = 0;
    for(var i = 0; i < k.length; i++){
        var totalPrice = k[i];
        totalPrice = totalPrice + newprice;
    }
    return totalPrice;
}

var newP = komolaPrice(komla);
console.log(newP);