/** 소트인사이드 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const arr = input[0].split('').map(Number);
console.log(arr.sort((a,b) => b-a).join(''));