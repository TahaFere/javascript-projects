//  ******** promt ile kullanıcıdan bilgi almak  ******

let fullName=prompt("lütfen adınızı giriniz:");
console.log(fullName);
let text=document.querySelector("#app");
text.innerHTML= text.innerHTML+"<small style='color:red'> "+fullName+"</small>"