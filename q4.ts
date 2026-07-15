type Member = [string, number, boolean];

let member1: Member = ["อนันต์", 25, false];
let member2: Member = ["เจนจิรา", 35, true];
let member3: Member = ["ชาคริต", 42, true];
let member4: Member = ["รุ่งโรจน์", 49, false];
let member5: Member = ["สามารถ", 27, false];


let members: Member[] = [
    member1,
    member2,
    member3,
    member4,
    member5
];

for (let member of members) {
    if (member[1] < 30) {
        console.log(`${member[0]} อายุ ${member[1]} ปี ยังไม่ชำระเงิน`);
    }
}