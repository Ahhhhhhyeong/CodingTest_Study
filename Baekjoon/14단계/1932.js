// 정수 삼각형
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const N = input.shift(); // 크기

const dp = [];
for(let i = 0; i < N; i++){
    dp.push(input[i].split(" ").map(v => v));
}

console.log(dp);