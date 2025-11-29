// array - dizilerle calışmak


// array oluşturmak
let domain="TAHA FERE";
let isActive=false;
let items=[12,24,36,isActive,domain];
console.log(items);

let emptyArray=[];

// array icerisindeki eleman/oge sayisini ogrenmek
console.log(items.length);
document.querySelector("#info").innerHTML=items.length;

// array icindeki ilk elemanin cagirilmasi
console.log(items[0]);

// array icindeki orta elemanin cagirilmasi
console.log(items[Math.floor((items.length-1)/2)]);

// array icibdeki son elemanın cagirilmasi
console.log(items[items.lengt-1]);

// degisken icindeki bilginin Array olup olmadiginin kontrol edilmesi
console.log(typeof(items));// objenct olarak çıktı veriyor
console.log(Array.isArray((items)));

// hangileri isArray -> true veriri
console.log("[]:",Array.isArray([]));
console.log("1:",Array.isArray(1));
console.log("true",Array.isArray(true));
