let x=1;//korualı değişken ilk nasıl değer verilirse öyle kalır anlık değişimlere izin verir
if(x==1){
    let x=2;//burda değişim yapıldı ama kalıcı değil
    console.log(x);//çıktı=>2
}
console.log(x);//çıktı=>1
console.log("-----------")
var y=1;//korumasız değişken değeri değiştirilebilir 
if(y==1){
    var y=2;//değişkenin değeri değişti
    console.log(y);//çıktı=>2
}
console.log(y);//çıktı=>2
console.log("-----------")
const z=1;//ultra koruma değişken hiç bir şekilde yeni atama yapılmamsını sağlıyor
if(z==1){
    //var z=2; bu rada değişkene yeni atama yapılmak isteniyor ama hata alınıyor
    console.log(z);//çıktı=>1
}
console.log(z);//çıktı=>1
console.log("*********")
var apple="red apple";//değişken olarak tanıtmak için var kullanılır
console.log(apple)

var apple="blue apple";
console.log(apple)

console.log("hey bu bir elma")
console.log("-----------")
let aapple="red apple";//let olarak aapple tanımladık
console.log(aapple)

//var aapple="blue apple";// var olarak tekrar aapple olarak tanımlanamaz
aapple="blue apple";
console.log(aapple)

console.log("hey bu bir elma")
console.log("-----------")
const applee = "red apple";//değiştirilmeyen değişken tanımladık
console.log(applee)

//var aapple="blue apple";değiştirilmeyen değişkene yeni değer atanmaz
//applee="blue apple";
//let applee="blue apple"; yanı döngü içinde veri değiştirmeye çalışıyoruz
console.log(aapple)

console.log("hey bu bir elma")
console.log("-----------")
const Apple="red apple";//değişken olarak tanıtmak için var kullanılır
console.log(Apple)

if(true){
    let Apple="blue apple";
    console.log(Apple)
}

console.log("hey bu bir elma")
console.log("*************")
var selam="selam";
if(true){
    var selam="selamlar"
    console.log(selam)
}
console.log(selam)
console.log("-----------")
let selam1="selam";
if(true){
    let selam1="selamlar"// var yazıldığında selam1'e değer vermeye çalışıyor. let ise döngü içinde aynı değişken yine kullanılırsa o değişken aynı değilmiş gibi yeniden tanımlanıyor
    console.log(selam1)     // iki aynı değişkeni selam ve selam1 gibi tanımlayıp farklı değişkenler oluyor
}
console.log(selam1)
console.log("-----------")
selam2="selam";
if(true){
    var selam2="selamlar"           // var, let, const, değişken biçimleri döngü yada koşul gibi içinde kullanıldığında o yere ait yeni değişken oluşturuyorlar 
    console.log(selam2)
}
console.log(selam2)
console.log("-----------")
selam3="selam";
if(true){
    let selam3="selamlar"
    console.log(selam3)
}
console.log(selam3)
console.log("-----------")
selam4="selam";
if(true){
    const selam4="selamlar"
    console.log(selam4)
}
console.log(selam4)
console.log("*************")

function toplam(x,y){
    console.log(x+y)
}
function cikarma(x,y){
    console.log(x-y)
}
toplam(5,6);
cikarma(14,4);

function burger(){
    let ustEkmek="a";
    let peynir="b";
    let et="c";
    let yesillik="d";
    let altEkmek="e";
    console.log(ustEkmekEkmek+" "+peynir+" "+et+" "+yesillik+" "+altEkmek)
}
burger();














