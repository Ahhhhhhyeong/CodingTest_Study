/** 수 정렬하기 
 * 2751, 2750 같은 문제
*/
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);
input.shift(); // 첫번째 숫자는 N개 표현이라 제거하여줌
console.log(input.sort((a,b) => a-b).join('\n'));
