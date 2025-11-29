// array forEach metotu


const PRODUCTS=["laptop","phone","speaker","desktop PC","server","mouse","keyboard"]

PRODUCTS.forEach((product,index,array) => array[index]=product.toUpperCase())

console.log(PRODUCTS)

// const UL_DOM=document.querySelector("#userList1");

// for (let index=0; index<PRODUCTS.length; index++){
//     if(PRODUCTS[index]=="dolor"){continue}
//     let LI_DOM=document.createElement('li');
//     LI_DOM.innerHTML=PRODUCTS[index];
//     UL_DOM.append(LI_DOM);
// }

const UL_DOM=document.querySelector("#userList1");

PRODUCTS.forEach(product=>{
const liDOM=document.createElement('li');
liDOM.innerHTML=product;
UL_DOM.append(liDOM)
})

