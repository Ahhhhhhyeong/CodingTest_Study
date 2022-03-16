/** 재귀함수 다루기
 * 팩토리얼 작성
 */

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);
const factorial = (N) => {
    let result = 1;
    for(let i = N; i > 0; i--){
        result *= i;
    }
    return result;
}

console.log(factorial(input));