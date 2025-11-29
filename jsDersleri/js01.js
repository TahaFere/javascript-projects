//**** let  ,  const    ve    var değişken tanımlama

// var ile değişken
var serverName="deneme.org";
console.log(serverName);

// let ile değişken
let serverNAme;
console.log(serverNAme);

// let ile değişken
serverNAme="https://kodluyoruz.org";
console.log(serverNAme);

// let ile değişken
let password="1234";
console.log(password);
// değişken ataması yapmadan önce kullanmaya calışmak
console.log(fullName1);//burada var ile tanımlanan değişkenden önce yazdırılmaya çalışındığında her hangi bir hata almıyoruz
var fullName1="tahafere";

//console.log(fullName) let ile tanımalamadan önce çağrıldığı zaman hata alınıyor
let fullName="taha fere"
fullName="fatmanur tilaver";
console.log(fullName)

fullName=fullName+" birleşim";
fullName="2.birleşim"+fullName;
console.log(fullName)

fullName="";
fullName+="yeni eklendi";
console.log(fullName);


// const ile değişken
//const serverPassword; bu şekilde tanımlayıp daha sonra değer veririm olmuyor constda tanımlandığı gibi değer verilmesi gerekiyor

// const ile değişken
const serverPassword="12345";
console.log(serverPassword);
//serverPassword="123135"; const ile oluşturulan değişkene bir daha değer ataması yapamayız