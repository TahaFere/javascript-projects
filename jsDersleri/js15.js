// *********** çoklukoşullarda çalışmak *******

let userName=prompt("kullanıcı adınız: ");
let age=prompt("yasşınız: ");
let info=document.querySelector("#info")

if(userName && age >=18){
    info.innerHTML="ehliyet alabilir";
}
else if(!userName){
info.innerHTML="kullanıcı adınız yok...";
}
else if(!(age >=18)){
    info.innerHTML="yas bilginiz yok veya 18 yaşıdna küçüksünüz";
}
