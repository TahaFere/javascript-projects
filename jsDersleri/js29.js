// array yapısına oge eklemek ve array  icerisinden istenilen ogenin cikarılması

let items=[10,20,30,40,];
console.log("ilk liste",items);

// array: sona oge/eleman eklemek -> push
items.push(50);
console.log("listenin sonuna eleman ekleme:",items)

// array: basa oge eklemek -> unshift
items.unshift(5);
console.log("listenin başına eleman ekleme:",items)

// array: sondaki ogeyi cikarmak -> pop
let lastItem=items.pop();
console.log("listenin son ögesini çikarma",items);
console.log("listenin son ogesi burda:",lastItem)

// array: bastaki ogeyi cikarmak -> shift
let firstItem=items.shift();
console.log("listenin ilk ogesini çikarma",items)
console.log("listenin ilk ogesi burda:",firstItem)

// array icindeki bir ogenin bilgisinin değistirilmesi:
items[0]=100;
console.log(items);
items[items.length-1]=599;
console.log(items)

items[10]=100000;
console.log(items)