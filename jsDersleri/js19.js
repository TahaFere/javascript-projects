//    ********* fonksinlaya parametreler atamak ve fonksiyondan geri donüs almak*******

// Temel kurallar:
// 1: bir fonksiyon bir veya birden fazla parametre alabilir veya hiç almayabilir.
// 2: bir fonksiyon dısarı bilgi gonderebilir(return) veya gondermeyebilir.
// 3: mumkunse fonksiyonun bagimliliklarını azaltmak gerekir

let fisrtName="lorem";

function greeating(fisrtName,lastname="a"){
    console.log("merhaba",(fisrtName ? fisrtName : ""));
    console.log("merhaba",fisrtName,lastname);
    
}

greeating(fisrtName);

function greeating2(fisrtName,lastname){
    let info="merhaba "+fisrtName+" "+lastname;
    return info;
}
let info =greeating2("ad","soyad");
console.log(info);

function DOMWrite (id,info){
    let domObject=document.querySelector("#"+id);
    domObject.innerHTML=info;
}

let htmlInfo="<span style='color:red'> color redddd</span>"

DOMWrite("title ",info);
DOMWrite("app",greeating2("taha","fere"));
DOMWrite("greeting",htmlInfo);
