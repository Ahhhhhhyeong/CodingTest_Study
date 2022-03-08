/** 골드바흐의 추측  */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);
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
for(let i = 0; i < input.length; i++){
    let n = input[i];
    let arrPrime = solution(n);
    let med = n/2;
    for(let i = med; i <= n; i++){
        if(arrPrime[i] === true && arrPrime[n-i] === true){
            console.log(n-i, i);
            break;
        }
    }
}



