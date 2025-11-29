// **** DOM etiketleriyle çalışmak

let greeting=document.querySelector("#greeting");
    greeting.addEventListener("click",DOMclick);// evetlistesi üzerinden neler yapabileceğini görebilirsin araştır..
//greeting.addEventListener("mouseover" , DOMclick);

function DOMclick(){
    console.log("etkinlik çalışıyor...");
    console.log(this);
    console.log(this.innerHTML="tiklandığı için bilgi değişti");
    this.style.color =="red" ? this.style.color ="black" : this.style.color ="red" ;

}