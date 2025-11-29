// ******** VERİ TÜRÜNÜ ÖĞRENMEK VE VERİ TÜRÜ DÖNÜŞÜMLERİ


// VER İTÜRÜNÜ ÖĞRENMKE TYPEOF:
let price=111;
let stringPrice="111";
let hasPassword=true;

console.log(
    "price:",typeof(price),
    "stringPrice",typeof(stringPrice),
    "hasPassword",typeof(hasPassword)
);
console.log(typeof("11")==="string");

// string(metinsel) bilgileri int ve float'a donusturmek
let number1="11";
number1=parseInt(number1);
console.log("number1:",number1, typeof(number1));

let number2="px11px";
number2=parseInt(number2);
console.log("number2:",number2, typeof(number2));

let number3="11.1";
number3=Number(number3);
console.log("number3:",number3, typeof(number3));

let number5="11.4px";
number5=Number(number5);
console.log("number3:",number5, typeof(number5));

let number4="11.4px";
number4=parseFloat(number4);
console.log("number3:",number4, typeof(number4));

//number veri tipinden string'e donusturmek:
let number6=55;
number6=number6.toString();
console.log(number6,typeof(number6));