// let price = Number(prompt("Enter a price"));

// function d(price){
//     let discount=0;
//     if(price<=5000){
//         discount = 0;
//     }
//     else if(price>5000 && price<=10000){
//         discount=price*(5/100);
//     }
//     else if(price>10000){
//         discount=price*(20/100);
//     }
//     let finalPrice = price-discount;
//     console.log(`Discount ${discount}`);
//     console.log(`finalprice ${finalPrice}`);

// }
// d(price);

//Electricity Bill Software
//brute force
// let unit = +(prompt("Enter a unit"));
// let amount = 0;
// if (unit > 0 && unit <= 100) {
//   amount = unit * 4.2;
// } else if (unit > 100 && unit <= 200) {
//   amount = (100 * 4.2) + ((unit - 100) * 6);
// } else if (unit > 200 && unit <= 400) {
//   amount = (100 * 4.2) + (100 * 6) + ((unit - 200) * 8);
// } else if (unit > 400) {
//   amount = (100 * 4.2) + (100 * 6) + (100 * 8) + ((unit - 400) * 13);
// }
// console.log(amount);

//optimize code
// let unit= Number(prompt("eNTER A NUMBER"));
// let amount=0;
// if(unit>400){
//     amount=amount+(unit-400)*13;
//     unit=400;
// }
// if(unit>200 && unit<=400){
//     amount=amount+(unit-200)*8;
//     unit=200;
// }
// if(unit>100 && unit<=200){
//     amount=amount+(unit-100)*6;
//     unit=100
// }
// amount=amount+(unit)*4.2;
// console.log(amount);


