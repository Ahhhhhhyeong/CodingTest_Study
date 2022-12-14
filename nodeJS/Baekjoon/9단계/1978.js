/** 소수 찾기 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let cnt = Number(input[0]);

const strToNumArr = input[1].split(' ').map(Number);
const isPrime = (n) => {
    if(n===1) return false;
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0)
            return false;
    }
    return true;
}
let primeCnt = 0;
for(let i = 0; i < cnt; i++){
    if(isPrime(strToNumArr[i])){
        primeCnt++;
    }
}
console.log(primeCnt);