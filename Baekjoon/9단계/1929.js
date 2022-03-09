/** 소수 구하기 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let x = input[0].split(' ').map(Number);
console.log(x);
//let arrPrime = [];
let solution = (n) => {
    let arr = Array(n + 1).fill(true).fill(false, 0, 2);

    for(let i = 2; i < Number(n**0.5) + 1; i++){
        if(arr[i]){
            for(let j = i * i; j <= n; j += i){
                arr[j] = false;
            }
        }
    }
    return arr;
}  
for(let i = x[0]; i <= x[1]; i++){
    solution(i);
}