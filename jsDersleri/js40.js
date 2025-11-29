//  onject ve array destructuring nasıl kullanılır

// object destructuring:
let setting={
    userName:"loremIpsum",
    password:"badPassword",
    isActive: false,
    ip:"145.324.12.3",
    serverName:"TAHAFERE",
};

// obje icindeki bilgilerin tek seferde cikarılması
// let userName= setting.userName
// console.log(userName)
let{ userName: user, password, isActive, ip:serverIP, serverName}=setting
console.log(user, password, isActive, serverIP, serverName)
console.log(setting)
console.log(user)


// obje icindeki bazı bilgilerin cıkarılması
let{userName:userName2, password:password2, isActive:isActive2, ...newSetting}=setting
console.log(userName2,password2,isActive2)
console.log(newSetting)

//objenin destructuring ile kopyalanması
// let setting2=setting; hatalı
// setting2.userName="değişen bilgi";
// console.log(setting)
// console.log(setting2)

let setting2={...setting};
setting2.userName="değişen bilgi";
console.log(setting)
console.log(setting2)

let score=[100, 200, 300, 400]

let[score1, score2, ...otherScore]=score
console.log(score1, score2, otherScore)

let copyOfScore=[...score]
console.log=copyOfScore