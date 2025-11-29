//  ********* STRİNG VERİ TÜRÜ İŞLEMLERİ  *********

let email="tahafere@gmail.com";
let firstName="taha";
let lastName="fere";

// string karakter sayisi ->length
console.log(email.length);

// ilk karakteri bulmak -> [0]:
console.log(firstName[0]);
console.log(firstName.charAt[1]);

//buyuk harf/ kucuk harf:
firstName=firstName.toUpperCase()
console.log(firstName);

firstName=firstName.toLocaleLowerCase();
console.log(firstName);

// string icinde istediğimiz bilgiyi aramak ve yerini bulmak -> search:
console.log(email.search("@"));
console.log(email[15]);
console.log(email.search("aedga"));//olmayan bişi varsa -1 çıktısı gelir

// belli bir yere kadar al ->slice:
console.log(email.slice(0,8));
console.log(email.slice(8));
let DOMAIN=email.slice(email.search("@")+1);
DOMAIN=DOMAIN.slice(0,DOMAIN.indexOf("."));
console.log(DOMAIN);

// bilgiyi değiştir ->replace:
email=email.replace("gmail.com","nsa.org");
console.log(email);

// istediğim bilgi var mı? ->includes:
console.log(email.includes("@"));// true
console.log(email.includes("qewf"));// false

//istediğim bilgiyle basladi mi bitti mi ->startsWidth, endsWidth:
console.log(email.endsWith(".org"));// true
console.log(email.endsWith(".com"));// false

// ilk harflerini büyük yapmak
let fullName=firstName[0].toUpperCase()+firstName.slice(1).toLowerCase()
+" "+
lastName[0].toUpperCase()+lastName.slice(1).toLowerCase();
console.log(fullName);
