// FORMLARLA ÇALIŞMAK: BOLUM SONU EGZERSİZİ

/*
1: FORMU SEÇ
2: INPUT BILGISINI UL İCERİSİNE EKLE
3: FORM ICINDEKI BILGIYI SIFIRLA
4: EGER FORM BILGI GIRILMEZSE KULLANICIYI UYAR
*/

let userFormDOM=document.querySelector("#userForm");
userFormDOM.addEventListener("submit",formHandler)
const alerDOM=document.querySelector("#alert")

const alertFunction=(title,message,classNAme="warning")=>'<div class="alert alert-'+classNAme+' alert-dismissible fade show" role="alert"><strong> '+title+' </strong> '+message+'<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

function formHandler(event){
    event.preventDefault();
    const USER_NAME=document.querySelector("#username");
    const SCORE=document.querySelector("#score");
    if(USER_NAME.value && SCORE.value){
        addItem(USER_NAME.value,SCORE.value)
        USER_NAME.value=""
        SCORE.value=""
    }
    else{
        console.log("hatalı giriş");
        alerDOM.innerHTML=alertFunction("uyarı","eksik bilgi girdiniz","danger");
    }
}

let userListDOM=document.querySelector("#userList");
const addItem = (userName,score) => {
    let liDOM=document.createElement("li")
    liDOM.innerHTML=userName+"<span class='badge bg-primary rounded-pill'>"+score+"</span>"
    liDOM.classList.add("list-group-item","d-flex","justify-content-between","align-items-center")
    userListDOM.append(liDOM)
}
