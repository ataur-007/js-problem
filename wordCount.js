var space = ["this is a good boy in our village."];
var count = 0;
for( var i =0; i < space.length; i++){
    var charecter = space[i];
    if( charecter == " "){
        count++;
    }
}
count++;
console.log(count);