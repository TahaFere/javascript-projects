// *******  NUMBER ******
//number veri turu tanimlamak:
let price=100;
let tax=0.18;
let priceTax=price*tax;
let total=price+priceTax;
console.log(
    "fiyat: "+ price+
    " KDV oranı: "+tax+
    " KDV tutari:"+priceTax+
    " fiyat: "+total
);

let stringNumber="11";
console.log(stringNumber);
let newNumber=Number(stringNumber);
console.log(newNumber);
console.log("number constructor icine bilgi gönderildi:", Number("111"))

//arttirma ve azaltma işlemleri:
let counter=320;
counter=counter+1;
console.log(counter);
counter++;
console.log(counter);
counter+=1;
console.log(counter);

counter--;
console.log(counter);
counter-=1;
console.log(counter);

counter*=10;
console.log(counter);

counter/=10;
console.log(counter);

//islem onceliği:
console.log(2+3*10);
console.log((2+3)*10);

//mod(kalan) alma %: bölümden kalanı gösterir
//sayi tek mi çift mi??
console.log(3%2);
console.log(15%2);
console.log(14%2);

// 8 ürün alan koliye tüm ürünler sığıyor mu??
console.log("koli örneği: "+37%8);

// us alma **:
console.log(2*2*2*2);
console.log(2**4);

//asagi yuvarlama işlemi -> Math.floor:
console.log("aşağı yuvarlama:"+Math.floor(1.6));

//yukari yuvarlama işlemi -> Math.ceil:
console.log("yukarı yuvarlama:"+Math.ceil(1.3));

//yakina yuvarlama islemi -> Math.round:
console.log("yakina yuvarlama:"+Math.round(1.4));
console.log("yakina yuvarlama:"+Math.round(1.6));
console.log("yakina yuvarlama:"+Math.round(1.5));