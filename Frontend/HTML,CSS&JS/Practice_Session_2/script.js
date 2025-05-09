// Q1: Create a function that takes another function as an argument and calls it after 3 second.
// function hof(takeCB){
//     setTimeout(takeCB,3000)
// }
// function cb(){
//     console.log("after 3 second")
// }
// hof(cb);

//Q2: Implement your own version of map() as higher order function
// let array=[1,2,3]

// function mapCopy(arr,fn){
//    let newArr=[];
//    for(let i=0;i<arr.length;i++){
//         newArr.push(fn(arr[i]))
//    }
//    return newArr;
// }
// let ans = mapCopy(array,function(currElem){
//     return currElem;
// });
// console.log(ans);

// Q3: Using closure build a counter function
// function outer(){
//     let count=0;
//     return function inner(){
//         count++;
//         console.log(count);
//     }
// }
// let ans=outer();
// ans() //1
// ans() //2
// ans() //3

//Q4: Implement a function that limits how many times another funtion can be called(closre+hof)
function limitCalling(fn, limitCount) {
  let count = 0;
  return function inner() {
    if (count < limitCount) {
      count++;
      fn();
    } else {
      console.error("limit out!");
    }
  };
}
let ans = limitCalling(() => {
  console.log("hello");
}, 3);
ans(); //hello
ans(); //hello
ans(); //hello
ans(); //limit out function does not run
