//  ********** Karşılaştırma operatörleri ve mantıksal operatörler  ********

let price="100";
let user="taha";

// == Eşitse
console.log("== ;",price==1);
console.log("== ;",price==100);

// === hem değeri hemde türü eşitse
console.log("=== ;",price===100);
console.log("=== ;",price==="100");


// != eşit değilse
console.log("!= ;",price==100);
console.log("!= ;",price!=1);
console.log("!= ;",price!=100);
console.log("user!= guest",user!= "guest" );

// < küçükse
console.log("price < 50;",price<50);
console.log("price < 120;",price<120);
console.log("price < 100;",price<100);

// <= küçük veya eşitse
console.log("price <= 50;",price<=50);
console.log("price <= 120;",price<=120);
console.log("price <= 100;",price<=100);

// > büyükse
console.log("price > 50;",price>50);
console.log("price > 120;",price>120);
console.log("price > 120;",price>100);

// >=büyük veya eşitse
console.log("price >= 50;",price>=50);
console.log("price >= 120;",price>=120);
console.log("price >= 120;",price>=100);

// && ve
price=0;
console.log(price>0 && user!="guest");

// || veya
console.log(price>0 || user != "guest");

// ! değil (tersi)
user = "guest";
price=1;
console.log(price>0 && !user == "guest");
