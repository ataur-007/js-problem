
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

var count = animalClaculator(22);
console.log(count);

//2nd time try

// var depth = 30;
// var animal = 0;
// if( depth <= 10){
//     animal = depth * 50;
// }
// else if( depth <= 20){
//     var firstPart = 10 * 50;
//     var reminging = depth - 10;
//     var secondPart = reminging * 100;
//     animal = firstPart + secondPart;
// }
// else{
//     var firstPart = 10 * 50;
//     var secondPart = 10 * 100;
//     var reminging = depth - 20;
//     var thirdPart = reminging + 300;
//     animal = firstPart + secondPart + thirdPart;
// }