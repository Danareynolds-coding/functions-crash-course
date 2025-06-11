
function printMe(){
    console.log();
}
printMe()

const printMe= function(){

}
function x(){

}
let p=x();

function y(){
    p;
}
function sum(a,b){
     return a+b;
}
sum(2,3)//5
 function calc(a,b){
    return (2*(a+b));
 }
 function calc(a,b=0){ //0 is a default parameter value
    return (2*(a+b));
 }
//  REST PARAMETER
 function collectThings(x,...y){ //3 dots calls out rest parameter (only last one)
    console.log(x); //1
    console.log(y);//(8)[2,3,4,5,6,7,8,9];
  }
  collectThings(1,2,3,4,5,6,7,8,9,);
//   arrow function
const add =function (x,y){
    return x+y;
}
converted
const add=(x,y)=>return x+y;
 add(2,3) //5
 
// nested function
function outerFunction(){
    console.log('outerFunction');
    function innerfunction(){
        console.log('innerFunction');
    }
};
// scope example1
function doSomething(){
    let x=10;
    const y=20;
    varz=30;
    console.log(x,y,z);
    doSomething();
}
doSomething(); //10,20,30
console.log(x,y,z) //error undefined bcause outside function
// scope example 2
var x=10;
const y=20;
let z=30;
function doSomethng(){
    console.log(x,y,z); //10 20 30
}
// closures- innerfunction is a closure
// inner function can use variables from outer function
// example closure
function outer(x){
    function inner(y){
        return x+y;
    }
    return inner;   //
}
const outerReturn= outer(10); //undefined
const outerReturn 
// f inner(y){
// return x+y;
// }
outerReturn(2) //12 ( because 10 + 2=12)

// callback functions (pass function as a parameter)
foo(function(){ //no nmae is an annonmous name
    console.log('bar');
})
// or
function(named){
console.log('bar')
}
foo(named);
bar //undefined

