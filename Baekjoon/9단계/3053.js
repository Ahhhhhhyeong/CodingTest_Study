/** 택시 기하학 */
// 소숫점도 함께 나타내야했음
// Math 함수 사용
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);
let pie = Math.pow(input,2) * Math.PI;
let nonEuc = Math.pow(input,2) * 2;
console.log(`${pie.toFixed(6)}\n${nonEuc.toFixed(6)}`);