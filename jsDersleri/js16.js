//  ********* ternary operqator ile short if kullanımı******

// eger kullanici adi varsa yazdır yoksa kullanici bilgilerini bulunamadi yazdır

let userNAme=prompt("kullanıcı bilgisini yazınız: ");
let info=document.querySelector("#info");


// ternary kullanımı
// kosul ? doğruysa : yanlışsa

info.innerHTML=userNAme.length>0? userNAme : "kullanıcı bilginiz bulunumadı :( ";


