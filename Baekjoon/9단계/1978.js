/** 소수 찾기 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let cnt = Number(input[0]);

const strToNumArr = input[1].split(' ').map(Number);
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