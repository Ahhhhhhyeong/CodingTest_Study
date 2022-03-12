/** 소인수분해 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

for(let i = 2; i <= input; i++){
    while(input % i === 0){
        input /= i;
        console.log(i);
    }
}