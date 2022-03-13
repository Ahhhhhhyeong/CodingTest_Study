/** 소인수분해 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);
let primeNumber = 2;

while(input != 1){
    if(input % primeNumber === 0){
        console.log(primeNumber);
        input /= primeNumber;
    }else{
        primeNumber++;
    }
}