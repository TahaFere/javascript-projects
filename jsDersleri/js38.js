// object key - values:

let laptop1={
    brand:"apple",
    model:"macbook pro",
    "2kg":2,
    modelName:"macbook pro",
    model_name:"macbook pro",
}

console.log(laptop1)

//dogru anahtar bilgisi olusturmak
console.log(laptop1.brand,laptop1["brand"])
console.log(laptop1.model,laptop1["model"])
console.log(laptop1["2kg"])

//anahtar bilgisine yeni deger eklemek
laptop1.brand="mac";
laptop1["brand"]="mac1";
console.log(laptop1)

// yeni bilgi ekleme
laptop1.versiyon="10.12.234";
console.log(laptop1)

//anahtar bilgilerine ulasmak (keys) -> object.key(item)
keys=Object.keys(laptop1);
console.log(keys)
console.log(Object.keys(laptop1))

keys.forEach(item => {
    console.log(item)
    console.log(laptop1[item])
});

// deger bilgilerine ulasmak (values) -> object.values(item)
console.log(Object.values(laptop1))

let values =Object.values(laptop1);
values.forEach(value => {
    console.log(value)
});

let setting = {// bu şekilde iblgileri bir arada tutabilirz
    password: 1234,
    userNmae:"user1"
}