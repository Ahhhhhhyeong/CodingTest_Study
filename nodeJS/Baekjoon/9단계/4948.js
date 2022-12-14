/** 베르트랑 공준
 * N보다 크고 2N보다 작거나 같은 소수의 개수 구하기
 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);
let i = 0;

const isPrime = (N, M) => {
    const isPrimeNumber = Array(M + 1).fill(true);
    isPrimeNumber[1] = false;

    for(let n = 2; n <= Math.ceil(Math.sqrt(M)); n++){
        if(isPrimeNumber[n]){
            let m = 2;
            while(n * m <= M){
                isPrimeNumber[n*m] = false;
                m++;
            }
        }
    }
    const results = [];
    for(let n = N; n <= M; n++){
        if(isPrimeNumber[n]){
            results.push(n);
        }
    }
    return results;
}

while(input[i] != 0){
    let n = input[i] + 1;
    let n2 = input[i] * 2;
    if(input[i] === 1){
        console.log(1);
        i++;
        continue;
    }
    let arr = isPrime(n, n2);
    console.log(arr.length);
    i++;
}