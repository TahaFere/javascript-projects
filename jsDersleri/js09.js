//// ********* DOM içinden öge seçimi *****

let h2=document.getElementsByTagName("h2");
console.log(h2.title.innerHTML);
let title = document.getElementById("title");
console.log(title.innerHTML);
title.innerHTML="deneme";
console.log(title.innerHTML);

//let link=document.querySelector("ul#list>li>a")    ///tek bir tane seçmeye yarıyor
let link=document.querySelector("#deneme_link");
//console.log(link.innerHTML);
link.innerHTML+=" değiştirildi";
link.style.color="red";
link.classList.add("btn");


