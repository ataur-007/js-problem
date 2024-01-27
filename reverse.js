var speech = ["This is our first reverse string"]
// var count =0;
// for(var i = 0; i < speech.length; i++){
//     var reverse = speech[i];
//     if( reverse == " " && speech[i - 1 != " "]){
//         count++;
//     }
// }


function reverseString(s){
    var reverse = "";
    for( var i = 0; i<s.length; i++){
        var charecter = s[i];
        reverse = charecter + reverse;
    }
    return reverse;
}

var alien = reverseString(speech);
console.log(alien);