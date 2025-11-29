// array map kullanimi

const USERS=["fatmaNUR", "TAHA", "AhMet", "EsrA", "Yasin"];

// userName icinde orjinal isim kalsin
// shortName icinde ilk harfi büyük . (A.)
// newName icinde ilk harf buyuk olsun

const NEW_USERS=USERS.map(user => user.toLocaleLowerCase())
console.log(NEW_USERS);

// const USERS_OBJ= USERS.map(item => 
// {
//     return{userName: item, shortName: item[0].toUpperCase()+item.slice(1).toLowerCase()}
// })
const USERS_OBJ= USERS.map(item => 
{
    return{userName: item, shortName: item[0].toUpperCase()+item.slice(1).toLowerCase()}
}
)

console.log(USERS_OBJ)