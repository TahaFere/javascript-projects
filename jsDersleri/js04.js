//   ***** BOOLEN VERİ TÜRÜ İLE ÇALIŞMAK******

// 0 VE 1 'İ ANLAMAK ->
let isActive=false;// 0
isActive=true;// 1
console.log(isActive);

let userName;
let hasUSerName=Boolean(userName);
console.log(hasUSerName);
Boolean("11");//true
Boolean("0");//true
Boolean("")//false

userName="user";
console.log("user name:",Boolean(userName));

// 0, -0, NULL, FALSE, NaN, undefined, ("")-> 
console.log(Boolean(0));// false
console.log(Boolean(-0));// false
console.log(Boolean(-0.1));// true
console.log(Boolean(0===0));//true

console.log(userName.length>0)//true