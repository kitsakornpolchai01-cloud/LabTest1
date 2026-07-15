let sum = 0;

for (let day = 1; day <= 30; day++) {
    sum = sum + day;
    console.log("วันที่", day, "ยอดเงินออมในวันนี้", day, "บาท");
}

console.log("ขอแสดงความยินดีครับ/ค่ะ เดือนนี้คุณสามารถออมเงินได้", sum, "บาท");