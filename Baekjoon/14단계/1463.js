/** 1로 만들기 */
// 문제 잘 못 이해함<<1차시도
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);
min_cnt = 0;
let temp = input;
while(true){
    if(temp % 3 === 0){
        temp /= 3;
        min_cnt += 1;
    }
    if(temp % 2 === 0){
        temp /= 2;
        min_cnt += 1;
    }
    if(temp === 1) break;
    else{
        temp -= 1;
        min_cnt += 1;
    }
}
console.log(min_cnt);