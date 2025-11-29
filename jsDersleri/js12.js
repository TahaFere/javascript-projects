// ******   DOM'a CSS class bilgisi eklemek veya çıkarmak  *********

let greeting=document.querySelector("#greeting");// id yazarken # işaretini unutma
greeting.classList.add("text-primary");
greeting.classList.add("title");
greeting.classList.add("new-info","second-class","third-class");// birden fazla class ekleme

greeting.classList.remove("text-primary","title","second-class","third-class");// birden falz class silme

console.log(greeting.classList);