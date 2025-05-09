// Q1: Create a function that takes a callback and excutes it after every 'n' secondds indefinitely.
// function loopCall(fn,time){
//     setInterval(fn,time);
// }
// loopCall(function(){
//     console.log("RPEAT...AFTER 2 SECOND");
// },2000);

//Q2: Implement a function that returns a funciton a present greeting(closure)
// function outer(greeting){
//     return function inner(username){
//          console.log(`${greeting} ${username}`)  
//     }
// }
// let greetFn = outer("Hello");
// greetFn("MERAJ");
// greetFn("SERAJ");

// Q3: Implement a function that takes a callback and only executes it once(HOF+CLOSURE)
// function outer(cb){
//     let excuted =false;
//     return function inner(){
//         if(!excuted){
//             cb();
//             excuted=true;
//         }
//         else{
//             console.warn("only once");
//         }
//     }
// }

// let outputFun = outer(()=>{console.log("run only once")})
// outputFun() //run only once
// outputFun() //warning

// Q4: Implement a function that throttles another function(HOF+Closure).
// function outer(callbackFuntion,delay){
//     let count = 0;
//     return function inner(){
//         let currentTimeSecond=Date.now();
//         if(currentTimeSecond-count >=delay){
//             count=currentTimeSecond;
//             callbackFuntion();
//         }
//     }
// }
// let newFun = outer(()=>{console.log("hello")},2000)
// newFun();
