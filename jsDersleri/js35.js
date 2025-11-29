//array filter kullanimi

// 5 harften fazla olanlar??
const PRODUCTS=["MİC","cable","speaker","desktop PC","server","mouse","keyboard"]

const NEW_PRODUCTS=PRODUCTS.filter(item => item.length>5)
console.log(NEW_PRODUCTS);


//aktif kullanicilar??
const USERS=[
    {fullName: "fatmaNur tilaver", isActive: false},
    {fullName: "taha fere", isActive: true},
    {fullName: "ahmet toprak", isActive: true},
    {fullName: "ekrem sever", isActive: false}
]

const ACTIVE_USERS = USERS.filter(user => user.isActive===true);
console.log(ACTIVE_USERS)