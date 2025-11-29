// ******  liste içindeki ogeye ulaşmak ve eni öğe eklemek  ***

let lastItem =document.querySelector("ul#list1>li:last-child");
console.log(lastItem);
let firstItem =document.querySelector("ul#list1>li:first-child");
console.log(firstItem);
lastItem.innerHTML="son öge değiştirildi";
firstItem.innerHTML="ilk öge değişitirildi";

let ulDOM=document.querySelector("ul#list1");
let liDOM=document.createElement("li");
liDOM.innerHTML="kendi oluşturduğumuz öge";
ulDOM.prepend(liDOM);//ilk kısma ekler
ulDOM.append(liDOM);// en sona ekler ikisi aynı anda çalışmıyor

