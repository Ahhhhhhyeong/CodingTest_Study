/** 재귀함수 다루기
 * 팩토리얼 작성
 */

 const fs = require("fs");
 const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
 let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

 function factorial(num) {
     return num > 1 ? num * factorial(num - 1) : 1;
 }
 console.log(factorial(input));