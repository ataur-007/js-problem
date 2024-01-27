var id = [ 2, 3, 4, 6 , 9, 2, 4, 8, 3,];
var uniqueitem = [];
for( var  i = 0; i< id.length; i++){
    var element = id[i];
    var index = uniqueitem.indexOf(element);
    if( index == -1){
        uniqueitem.push(element);
    }
}
console.log(uniqueitem);


var neme = [ 2, 3, 4, 6 , 9, 2, 4, 8, 3,];
var unique = [];
for( var i =0; i< neme.length; i++){
    var newelwment = neme[i];
    var newelwmentindex = unique.indexOf[newelwment];
    if(newelwmentindex == -1){
        unique.push(newelwment);
    }
}
console.log(unique);