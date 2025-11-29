//for döngüsü

// for([başlangıçAtaması] ; [koşul ifadesi], [arttırımİfadesi]){
// yapılacak işlemler
//}

let users =["lorem", "ipsum", "dolor"];


// for( let index=0;index<10;index++){
//     console.log(index);
// }

// let index=0
// for( ;index<10;index++){
//     console.log(index);
// }

const userListDOM=document.querySelector("#userList1")
for (let index=0; index<users.length; index++){
    const liDOM=document.createElement('li');
    liDOM.innerHTML=(users[index]);
    userListDOM.appendChild(liDOM);
}