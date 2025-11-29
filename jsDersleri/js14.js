// ******* koşularla çalışma ******

// eğer kullanıcı bilgisi varsa ekrana ismni yazdırma

let userName=prompt("kullanıcı adınızı giriniz:");

if(userName.length){// true değer alırsa çalışır
    console.log("kullanıcı bilginiz: ",userName);
}
else{// false değer alırsa çalışır
    console.log("bilgi yok...")
}