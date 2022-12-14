/** N부터 M까지의 소수합 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

let [N, M] = input;
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

const isPrimeHap = (arr) => {
    let cnt = 0;
    for(let i = 0; i < arr.length; i++){
        cnt += arr[i];
    }
    return cnt
}

console.log(results.length != 0 ? `${isPrimeHap(results)}\n${results[0]}` : `-1`);

