// console.log("hello");
// console.warn("meraj");
// console.error("error");
// console.info("message");
// console.table({
//     name:"MERAJ",
//     AGE:25
// });

// console.log(typeof null);


//swap to value
// a=10;
// b=20;
// a=a^b;
// b=a^b;
// a=a^b;

// console.log(a)  //20
// console.log(b); //10

//swap
// a=10;
// b=20;
// a=a+b;
// b=a-b;
// a=a-b;
// console.log(a);
// console.log(b);

//swap
// let a=10;
// let b=20;
// [a,b]=[b,a]
// console.log(a);
// console.log(b);


// console.groupCollapsed("Aaj ka hissab");
    // console.log("daal chaawal 50");
    // console.log("nimbu pani 20");
    // console.log("pani puri 50");
// console.groupEnd();


// let str = "javaScript";
// if(str.search("script")===-1){
//     console.log(false);
// }
// else{console.log(true);}

// let arr=[1,2,3,4,5];
// const sum = arr.reduce((acc,curr)=>{
//     return acc= acc+curr   
// },0)
// console.log(sum);

//find second largest number in array
// var arr = [1,2,3,324,23,34,3,2,39,8]

// let unique = [...new Set(arr)]
// console.log(unique);

// let descending = unique.sort((a,b)=>{
//     return b-a;
// });
// console.log(descending);

// let ans = descending[1];
// console.log(`second largest number is: ${ans}`);

// shorthand
// console.log([...new Set(arr)].sort((a,b)=>b-a)[1]);

//reverse an array without using .reverse()
// var arr1 =[1,23,2,3,2,3,4,3,3,0]
// var arr2=[]
// for(let i = arr1.length-1;i>=0;i--){
//  arr2.push(arr1[i]); 
// }
// console.log(arr2);

//find frequent element in array
let arr = [2,2,1,3,4,1,3,4,6,7]
let obj ={}

arr.forEach((currElem)=>{
    obj[currElem] === undefined ? obj[currElem]=1 : obj[currElem]++;
});
console.log(obj);

//find most frequent in array