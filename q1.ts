export {};

let age: number = 10;
let disc: boolean = true;
let price: number;

if (age < 12) {
    price = 60;
} else if (age < 60) {
    price = 120;
} else {
    price = 100;
}

console.log("คุณอายุ", age, "ปี");
console.log("ตั๋วราคาปกติ", price, "บาท");

if (disc) {
    console.log("คุณได้รับส่วนลด 10%");
    console.log("ราคาสุทธิ", price - (price * 10 / 100), "บาท");
} else {
    console.log("คุณได้รับส่วนลด 0%");
    console.log("ราคาสุทธิ", price, "บาท");
}