/*
곱셈
(세 자릿 수) * (세 자리 수)
(1)과 (2)위치에 들어갈 세 자리 자연수가 주어질 때 
(3), (4), (5), (6)위치에 들어갈 값을 구하는 프로그램을 작성하시오.
*/
const fs = require("fs");
const { deflateSync } = require("zlib");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const a = parseInt(input[0]);
const b1 = parseInt(input[1]);
const b2 = parseInt(input[1].substring(0,1)); // 100의 자리
const b3 = parseInt(input[1].substring(1,2)); // 10의 자리
const b4 = parseInt(input[1].substring(2,3)); // 1의 자리

console.log(a * b4);
console.log(a * b3);
console.log(a * b2);
console.log(a * b1);
