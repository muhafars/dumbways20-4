function checkout(KD0023=15000000,C42212=12000000,D90312=7000000,HI2020=15000000){
var i=10;
var diskon= i/100;
console.log(`Laptop asus ROG|2pcs|${KD0023*2}`);
console.log(`Playstation|1pcs|${HI2020}`);

var subtotal=KD0023*2+HI2020;
console.log(subtotal);

var diskon=diskon*subtotal;
console.log(diskon);

var total=subtotal-diskon;
console.log(total);
}
checkout();