var a = 4;
var b = 45;
// console.log(a * b)
console.log( 'before swap: a=', a, "b = ", b)
var temp = a;
a = b;
b = temp;
console.log( 'after swap: a=', a, "b = ", b)


//first process
var aluPrice = 60;
var lauPrice = 45;
// console.log( 'before price: a=' aluPrice, "b=", lauPrice,)
console.log( 'after swap: a=', aluPrice, "l = ", lauPrice)

var tamp = aluPrice;
aluPrice = lauPrice;
lauPrice = tamp;
console.log( 'after price: alu=', aluPrice, "lau" ,lauPrice)


//2nd process
var x = 4;
var y = 6;
x = x + y;
y = x - y;
x = x - y;
console.log('After swap x=', x, "y= ", y,)

//third option

var x = 545;
var y = 34;
[x , y] = [y , x];
console.log('after swap x =', x , "y=", y)

