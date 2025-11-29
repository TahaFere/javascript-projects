// ***** arrow function kullanımı

function hello(firstName){
    console.log(firstName);
}
hello("JS")

const helloFuncV1 = (firstName) => {console.log(firstName); }
//değişken tanımlama gibi çalışıyor, değişken ismi = içine gelicek olan parametreyi belittirk ve fonksiyon işlemi olduğunu belirttik  => return kısmını yazdık
helloFuncV1("helloFuncV1");

const helloFuncV2 = firstName => console.log(firstName);
helloFuncV2("helloFuncV2");

const helloFuncV3 = (firstName,lastName) => console.log(firstName,lastName);
helloFuncV3("helloFuncV3","aaaa")

const helloFuncV4 = (firstName,lastName) => {
    let info=firstName+" "+lastName
    console.log(info);
    return info;
}
helloFuncV4("helloFuncV4","bbbbbb");


