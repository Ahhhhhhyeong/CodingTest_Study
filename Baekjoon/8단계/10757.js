/** 큰 수 A+B */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split('\n');
const num = input[0].split(' ');
console.log((BigInt(num[0])+BigInt(num[1])).toString());