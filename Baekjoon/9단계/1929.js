/** 소수 구하기 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const strToNumArr = input[0].split(' ').map(Number);
const [M, N] = strToNumArr;
const isPrimeNumber = Array(N + 1).fill(true);
isPrimeNumber[1] = false;

for(let n = 2; n <= Math.ceil(Math.sqrt(N)); n++){
    if(isPrimeNumber[n]){
        let m = 2;
         while(n * m <= N){
             isPrimeNumber[n*m] = false;
             m++;
         }
    }
}
const results = [];
for(let n = M; n <= N; n++){
    if(isPrimeNumber[n]){
        results.push(n);
    }
}
console.log(results.join('\n'));