// 피보나치수열
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let N = input.shift();


const fibo = (n) =>{
    const returnObj = {
        zeroCnt: [1,0],
        oneCnt : [0,1]
    };
    if(n <= 1) return returnObj;
    for(let i = 2; i < n + 1; i++){
        returnObj.zeroCnt.push(returnObj.zeroCnt[i - 1] + returnObj.zeroCnt[i-2]);
        returnObj.oneCnt.push(returnObj.oneCnt[i-1] + returnObj.oneCnt[i-2]);
    }

    return returnObj;
}

const dp = fibo(40);

for(let i = 0; i < N; i++){
    console.log(`${dp.zeroCnt[Number(input[i])]} ${dp.oneCnt[Number(input[i])]}`);
}