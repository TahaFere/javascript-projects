// local storage islemleri

let user ={userName : "taha fere" , isActive: true}
localStorage.setItem('userInfo',JSON.stringify(user));

let userInfo=localStorage.getItem("userInfo");// bilgiyi al
userInfo=JSON.parse(userInfo);
console.log(userInfo);
console.log("depoladığımız ilk bilginin aktifliğine eriştik: ",user.isActive);
console.log("depoladığımız bilginin değişken üzerinden aktifliğini kontrol ediyoruz:",userInfo.isActive);

let items=[1,2,3,user];
console.log(items);
console.log(localStorage.setItem("newItem",items));
console.log("newItem",JSON.stringify(items));
console.log(localStorage.getItem("newItem"));
console.log(JSON.parse(localStorage.getItem("newItem")));
localStorage.removeItem("newItem"); // key bilgisini yazarak silebiliriz..


// localStorage icerisine bilgi kaydetmek:
let email = "hakanyalcinkaya@gmail.com"
localStorage.setItem('userEmail', email) // -> anahtar, deger yapisi kullanilir(key, value)

// localStorage icerisindeki bilgiyi bir degiskene atamak ve cagirmak:
let localStorageEMailInfo = localStorage.getItem('userEmail') // daha once atadigimiz anahtar bilgisi

console.log(localStorageEMailInfo)

// localStorage icerisinden istenilen Key bilgisinin silinmesi:
localStorage.removeItem('userEmail') // key bilgisini yazarak silebiliriz..