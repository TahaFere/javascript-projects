//cok kullanılan array(dizi) metotlari ve array icinde array

let items=[1,2,3,4,5];

// array içinde array:
let femaleUsers=["ayşe","fatmanur","merve"];
let maleUsers=["ahmet","taha","mehmet"];

items.unshift(femaleUsers);
console.log(items);

items.push(femaleUsers);
console.log(items);

console.log(items[0][0]);
console.log(items[0]["length"]);

// array icerisinden oge ayirmak -> splice(pos,items?)
let newItems = items.splice(1 ,5);
console.log("newItems:",newItems)
console.log("items:",items)

// array icerisindeki ogenin index bilgisini bulmak -> indexOF('value')
items.unshift("lorem")
items.push("ipsum")

console.log(items.indexOf("ipsum"));
console.log(items.indexOf("lorem"));

// array kopyalamak ->slice, [... ES6]
let copyItems=items// bu şekilde kopyalam olmuyor
console.log(copyItems)
copyItems.pop();
console.log("copyItems:",copyItems);
console.log("items:",items)

copyItems=items.slice()// kopyalama yapıldı.
copyItems.pop()
console.log("copyItems:",copyItems);
console.log("items:",items)

let es6Items=[...items];// buda bir kopyalam şeklidir
es6Items.pop()
console.log("es6Items:",es6Items);
console.log("items:",items)

// iki array bilgisini birleştirmek -> [...ES6, ...ES6]
let allUsers= [...femaleUsers,...maleUsers]
console.log(allUsers);

//array icerisindeki bilgiyi stringe cevirmek -> toString, join
console.log(allUsers.toString());
console.log(allUsers.join("---"));

// istedğimiz Index bilgisine oge eklemek -> splice(index, 0, value)
allUsers.splice(allUsers.length-1,0,"mellisa")
allUsers.splice(Math.floor((allUsers.length-1)/2),0,"BOoOM")
console.log(allUsers)