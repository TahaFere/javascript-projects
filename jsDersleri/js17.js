// ******* koşullarla çalışmak *******

/*
1- promt ile aldığın bilgiye gore asağıdaki yapıyı kullanarak notun bilgisini #info'a yazdır
AA 90-100
BA 85-89
BB 80-84
CB 75-79
CC 70-74
DC 65-69
DD 60-64
FD 50-59
FF 0-49

2- kullanicinin girdiği verinin istediğimiz aralıkta olup olmadığını kontrol et
3- ff bilgisinde uzgun surat ikonu cıkart, diğerlerinde gülücük olsun :)
4- ff class bilgisi text-danger, diğerleri ise text-primary olsun

*/
let score=prompt("lütfen ders puanınızı giriniz:");
let info=document.querySelector("#info");
if ( score>=0 && score<=100)
{
    info.classList.add("text-primary");
    if(score>=90 && score<=100)
        {info.innerHTML="AA  :)"; }
    else if(score>=85 && score<=89)
        {info.innerHTML="BA  :)";}
    else if(score>=80 && score<=84)
        {info.innerHTML="BB  :)";}
    else if(score>=75 && score<=79)
        {info.innerHTML="CB  :)";}
    else if(score>=70 && score<=74)
        {info.innerHTML="CC  :)";}
    else if(score>=65 && score<=69)
        {info.innerHTML="DC  :)";}
    else if(score>=60 && score<=64)
        {info.innerHTML="DD  :)";}
    else if(score>=50 && score<=59)
        {info.innerHTML="FD  :)";}
    else if(score>=0 && score<=49)
        {
            info.innerHTML="FF  :(";
            info.classList.remove("text-primary");
            info.classList.add("text-danger");
        }
    else
        {info.innerHTML="girdiğiniz değer 0 ile 100 arasında değil"};
}
else{
    info.innerHTML="yanlış değer girdiniz..."; 
}