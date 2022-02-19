const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const arr = input[0].split(' ').filter(el => el !== '');
console.log(arr);
