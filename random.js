// var number1 = -5.7;
// var absulate = Math.abs(number1);
// console.log(absulate);

// var number2 = 5.6;
// var absulate = Math.round(number2);
// console.log(absulate);


// var number3 = 5.00001;
// var absulate = Math.ceil(number3);
// console.log(absulate);


// var number4 = 5.00001;
// var absulate = Math.floor(number4);
// console.log(absulate);

// var num = 5.323;
// var abs = Math.random();
// console.log(abs);

var num = Math.random() * 10;
var abs = Math.round(num);
console.log(abs);


for(var i = 0; i < 5; i++){
    var num = Math.random() * 50;
    var abs = Math.round(num);
    console.log(abs);
}


var depth = 40;
function animalClaculator(depth){
var animal =0;
if( depth <= 10){
    animal = depth * 50;
}
else if(depth <= 20){
    var firstPart = 10 * 50;
    var reminging = depth - 10;
    var secondPart = reminging * 100;
    animal = firstPart + secondPart;
}
else if( depth <= 30){
    var firstPart = 10 * 50;
    var secondPart = 10 * 100;
    var reminging = depth - 20;
    var thirdPart = reminging + 200;
    animal = firstPart + secondPart + thirdPart;
}
else{
    var firstPart = 10 * 50;
    var secondPart = 10 * 100;
    var thirdPart = 10 * 200;
    var reminging = depth - 30;
    var forthPart = reminging * 300;
    animal = thirdPart + secondPart + firstPart + forthPart;
}
return animal;
}