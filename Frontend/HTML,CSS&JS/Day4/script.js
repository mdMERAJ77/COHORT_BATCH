
// abcd("MERAJ");
// function abcd(a){ //a: parameter
//     console.log(a);
// }
//  //arguments

// let abc=function(){
//     console.log("hi");
// }
// abc()

// let xyz =()=>{
//     return 1;
// }
// let ans = xyz();
// console.log(ans);

// const sum =(...numbers)=>{
//     return numbers.reduce((acc,currElem)=>{
//         return acc=acc+currElem;
//     },0)}
// console.log(sum(1,2,3));

// const greet = function(){
//     console.log("hello");
// }
// greet();
// greet=function(){
//     console.log("hi");
// }

// function outerFun(){
//     var outerValue = "i am outer";
//     function innerFun(){
//         console.log(outerValue);
//     }
//     return innerFun;
// }
// let closureFun = outerFun();
// closureFun();

//iife(imediately invoked function expression)
// (function(){
//     var a=10;
//     console.log(a);
// })();


//Higher order function

// function abc(x,y,operation){
//     operation(x,y);
// }
// function add(x,y){
//     console.log(x+y);
// }
// abc(2,3,add);

// let arr = new Array(30)

// for(let i =0; i<=30; i++){
//     console.log(arr[i]=i);
// }

const person ={
    name:"meraj",
    age:22,
    greet:function(){
        console.log("Hello");
    }
};