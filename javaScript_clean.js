// Basit değişken örnekleri: let, var, const

let x = 1; // blok-scoped
if (x == 1) {
    let x = 2; // sadece if bloğunda geçerli
    console.log(x); // çıktı => 2
}
console.log(x); // çıktı => 1
console.log('-----------');

var y = 1; // function/global scoped
if (y == 1) {
    var y = 2; // aynı scope'ta yeniden atanır
    console.log(y); // çıktı => 2
}
console.log(y); // çıktı => 2
console.log('-----------');

const z = 1; // sabit
if (z == 1) {
    console.log(z); // çıktı => 1
}
console.log(z); // çıktı => 1
console.log('*********');

var apple = 'red apple';
console.log(apple);

apple = 'blue apple';
console.log(apple);
console.log('-----------');

let aapple = 'red apple';
console.log(aapple);

aapple = 'blue apple';
console.log(aapple);
console.log('-----------');

const applee = 'red apple';
console.log(applee);
console.log(aapple);
console.log('-----------');
