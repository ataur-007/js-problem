// var found = 40;
// function thisIsFoundFucntio(found){
//     var newOne = 0;
//     if(found <= 10){
//         newOne = 10 * 50;
//     }
//     else if(found <= 20){
//        var firstpart = 10 * 50;
//        var reminging = found -10;
//        var secondPart = reminging * 100;
//        secondPart = firstpart + secondPart;
//     }
//     else{
//         var firstPart = 10 * 20;
//         var secondPart = 20 * 100;
//         var reminging = found - 20;
//         var thirdPart = reminging * 200;
//         var thirdPart = firstPart + secondPart + thirdPart; 
//     }
//     return newOne;
// }

// var round = thisIsFoundFucntio(10);
// console.log(round);

var noeasy = ["We know who to change our life"]

function reString(r){
    var stringr = "";
    for(var i = 0; i<r.length; i++){
        var newCharecter = r[i];
        stringr = stringr + newCharecter;
    }
    return stringr;
}

var nothingToDo = reString(noeasy)
console.log(nothingToDo);


