console.log(1 + "1");
console.log(1 - "1");
// let age = Number(prompt("Ener a age"));
// console.log(age);

//swap the value
//1st way
let a = 10;
let b = 20;
let c;
c = a;
a = b;
b = c;
console.log(a, b);

//2way
let x = 1;
let y = 2;
x = x + y;
y = x - y;
x = x - y;
console.log(x, y);

//3rd way destructuring assignment
let p = 100;
let q = 200;
[p, q] = [q, p];
console.log(p, q);

// Math Function
console.log(Math.round(10.4)); //10
console.log(Math.ceil(10.4)); //11
console.log(Math.floor(10.9)); //10
console.log(Math.abs(-8));
console.log(Math.trunc(10.4385845)); //10
console.log(Math.pow(5, 2)); //25
console.log(Math.sqrt(36)); //6
console.log(Math.cbrt(27)); //3
console.log(Math.max(10, 20, 39, 24)); //39
console.log(Math.min(10, 20, 39, 24)); //10
console.log(Math.PI);
//console.log(Math.trunc(Math.random()*10)); //0-9 (v.v.i)

let a1 = 2345.35345345;
console.log(a1.toFixed(2)); //2345.35 //NOTE: Type: string

// let p1 =Number(prompt("Enter principle"));
// let r =Number(prompt("Enter a rate"));
// let t = Number(prompt("Enter a time"));
// console.log(p1*Math.pow(1+r/100,t)-p1);

//Generate OTP
// console.log(Math.trunc(Math.random()*9000)+1000);
// let a2 = Number(prompt("Enter first number"));
// let b2 = Number(prompt("Enter second number"))
// let c2 = Number(prompt("Enter third number"))

// if(a2+b2<=c2 || a2+c2<=b2 || b2+c2<=a2){
//     console.log("Not Possible");
// }
// else{
//     let s =(a2+b2+c2)/2;
//     console.log(Math.sqrt(s*(s-a2)*(s-b2)*(s-c2)));
// }

// let rad= Number(prompt("Enter a number"));
// console.log(2*Math.PI*rad)

// if (false) {
//   console.log("hello world");
// } else {
//   console.log("false");
// }
// let n1=Number(prompt("Enter first number"));
// let n2=Number(prompt("Enter second number"));
// let n3=Number(prompt("Enter third number"));

// if(n1>=n2 && n1>=n3){
//     console.log(n1,"greatest number");
// }else if(n2>=n1 && n2>=n3){
//     console.log(n2,"greatest number");
// }
// else{
//     console.log(n3,"greatest number");
// }

// let year = Number(prompt("Enter a year"));
// if((year % 4 ===0 && year%100!==0 )|| year%400===0){
//     console.log("leap year");
// }
// else{
//     console.log("not leap year");
// }
