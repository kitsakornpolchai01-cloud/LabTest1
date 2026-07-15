let dailysales: number[] = [15000, 5500, 4200, 8900, 7300, 9600, 12500];

let excellentDays: number = 0;
let totalSales: number = 0;

console.log("ยอดขายแต่ละวันในสัปดาห์นี้");

for (let i = 0; i < dailysales.length; i++) {
    console.log("วันที่ " + (i + 1) + " : " + dailysales[i] + " บาท");
    
    totalSales += dailysales[i];

    if (dailysales[i] >= 10000) {
        excellentDays++;

        console.log("วันที่ " + (i + 1) + " มียอดขายดีเยี่ยม");
        console.log("ยอดขาย = " + dailysales[i] + " บาท");
    }
}

let averageSales: number = totalSales / dailysales.length;

console.log("------------------------------");
console.log("ยอดเงินรายวันทั้ง 7 วัน:");
console.log(dailysales);

console.log("จำนวนวันที่มียอดขายดีเยี่ยม: " + excellentDays + " วัน");

console.log("ผลรวมยอดขายทั้งหมด: " + totalSales + " บาท");

console.log("ยอดขายเฉลี่ยในสัปดาห์นี้: " + averageSales.toFixed(2) + " บาท");